require("dotenv").config();
const Admin = require("../models/Admin");
const Blog = require("../models/Blog");
const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const createPost = async (req, res) => {
	const { adminId, title, content } = req.body;
	if (!adminId || !title || !content)
		return res
			.status(StatusCodes.NO_CONTENT)
			.json({ message: "All Fields are required" });
	const admin = await Admin.findOne({ id: adminId });
	if (!mongoose.Types.ObjectId.isValid(adminId) || !admin) {
		throw new BadRequestError(
			"This adminId is not valid or the admin does not exsit in our database."
		);
	}
	const post = new Blog({ title, content });
	await post.save();

	return res
		.status(StatusCodes.CREATED)
		.json({ message: "Creation of blog post was successful." });
};

const deleteABlogPost = async (req, res) => {
	const { blogId } = req.params;
	const { adminId } = req.body;

	const admin = await Admin.findById(adminId);
	if (!mongoose.Types.ObjectId.isValid(adminId) || !admin) {
		throw new BadRequestError(
			"This adminId is not valid or the admin does not exist in our database."
		);
	}

	const blog = await Blog.findById(blogId);

	if (!mongoose.Types.ObjectId.isValid(blogId) || !blog)
		throw new BadRequestError(
			`Invalid Blog ID request or Blog  with id ${blogId} does not exist.`
		);

	await Blog.findByIdAndDelete(blogId);
	return res.status(StatusCodes.OK).json({
		message: `Blog with id ${blogId} was deleted successfully.`,
	});
};

const searchPost = async (req, res) => {
	const { query } = req.query;
	if (!query) {
		throw new NotFoundError("What are we searching for?");
	}
	const posts = await Blog.find({
		title: { $regex: new RegExp(query + ".*", "i") },
	});

	if (!posts || posts.length === 0) {
		throw new NotFoundError("We couldn't find any blog with that title");
	}
	return res
		.status(StatusCodes.OK)
		.json({ message: "Blog found successfully.", query, posts });
};

const getABlogPost = async (req, res) => {
	const { blogId } = req.params;

	if (!mongoose.Types.ObjectId.isValid(blogId)) {
		throw new BadRequestError(`Invalid Blog ID request.`);
	}

	if (!blog) {
		throw new BadRequestError(`Blog with id ${blogId} does not exist.`);
	}

	const blog = await Blog.findById(blogId);

	return res.status(StatusCodes.OK).json({
		message: "Blog request was successfully.",
		data: blog,
	});
}

const updatePost = async (req, res, next) => {
	const { title, content } = req.body;
	//1) Get Admin from params and update
	const admin = await Blog.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});
	if (!admin) {
		return next(new BadRequestError("No Blog found with this ID."));
	} else {
		return res.status(StatusCodes.OK).json("Blog Updated Successfully");
	}
};

module.exports = {
	createPost,
	getABlogPost,
	deleteABlogPost,
	searchPost,
	updatePost,
};
