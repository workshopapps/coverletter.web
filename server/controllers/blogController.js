require("dotenv").config();
const Admin = require("../models/Admin");
const Blog = require("../models/Blog");
const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");

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

	if (!mongoose.Types.ObjectId.isValid(blogId) || !blog)
		throw new BadRequestError(
			`Invalid Blog ID request or Blog  with id ${blogId} does not exist`
		);

	const blog = await Blog.findById(blogId);

	await Blog.findByIdAndDelete(blogId);
	return res.status(StatusCodes.OK).json({
		message: `Blog with id ${blogId} was deleted successfully.`,
	});
};

module.exports = {
	createPost,
	deleteABlogPost,
};
