require("dotenv").config();
const Admin = require("../models/Admin");
const Blog = require("../models/Blog");
const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const Reply = require("../models/Reply");
const Comment = require("../models/Comment");

const createPost = async (req, res) => {
	const { title, content } = req.body;
	const { public_id, url } = req.upload;
	if (!title || !content)
		return res.status(StatusCodes.NO_CONTENT).json({
			message: "All Fields are required",
		});
	const admin = await Admin.findById(req.user.userId);
	if (!mongoose.Types.ObjectId.isValid(req.user.userId) || !admin) {
		throw new BadRequestError(
			"This adminId is not valid or the admin does not exist in our database."
		);
	}
	const post = new Blog({
		title,
		content,
		adminId: req.user.userId,
		imageUrl: url,
		imageCloudinaryId: public_id,
	});
	await post.save();

	return res.status(StatusCodes.CREATED).json({
		status: "success",
		data: post,
	});
};

const deleteABlogPost = async (req, res) => {
	const { blogId } = req.params;

	const admin = await Admin.findById(req.user.userId);
	if (!mongoose.Types.ObjectId.isValid(req.user.userId) || !admin) {
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
		status: "success",
	});
};

const searchPost = async (req, res) => {
	const { query } = req.query;
	if (!query) {
		throw new NotFoundError("What are we searching for?");
	}
	const posts = await Blog.find({
		title: {
			$regex: new RegExp(query + ".*", "i"),
		},
	});

	if (!posts || posts.length === 0) {
		throw new NotFoundError("We couldn't find any blog with that title");
	}
	return res.status(StatusCodes.OK).json({
		message: "Blog found successfully.",
		query,
		posts,
	});
};

const getABlogPost = async (req, res) => {
	const { blogId } = req.params;

	if (!mongoose.Types.ObjectId.isValid(blogId)) {
		throw new BadRequestError(`Invalid Blog ID request.`);
	}
	const blog = await Blog.findById(blogId);
	if (!blog) {
		throw new BadRequestError(`Blog with id ${blogId} does not exist.`);
	}

	return res.status(StatusCodes.OK).json({
		message: "Blog request was successfully.",
		data: blog,
	});
};

const updatePost = async (req, res, next) => {
	const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});
	if (!blog) {
		return next(new BadRequestError("No Blog found with this ID."));
	} else {
		return res.status(StatusCodes.OK).json({
			message: "update successful",
			data: blog,
		});
	}
};

const getAllPosts = async (req, res) => {
	const result = await Blog.find({});

	if (result) {
		return res.status(200).json({
			message: "Successfully retrieved.",
			posts: result,
		});
	} else {
		return res.status(404).json({
			message: "Post not found",
		});
	}
};

const createABlogPostComment = async (req, res) => {
	const { userId } = req.user;
	const { content, blogId } = req.body;

	if (!mongoose.Types.ObjectId.isValid(blogId)) {
		throw new BadRequestError("Invalid blog request Id ");
	}

	if (!content) {
		return res.status(StatusCodes.NO_CONTENT).json({
			message: "All Fields are required",
		});
	}

	const comment = new Comment({
		blogId,
		userId,
		content,
	});

	await comment.save();

	return res.status(StatusCodes.CREATED).json({
		message: "Comment was created successfully ",
	});
};

const createAReplyToABlogComment = async (req, res) => {
	// this req.user comes from the token through the auth middleware in request header
	const { userId } = req.user;
	const { content, commentId } = req.body;

	if (!mongoose.Types.ObjectId.isValid(commentId)) {
		throw new BadRequestError("Invalid comment request Id ");
	}

	if (!content) {
		return res.status(StatusCodes.NO_CONTENT).json({
			message: "All Fields are required",
		});
	}

	const reply = new Reply({ commentId, userId, content });

	reply.save();

	// update the replies for the comment schema
	await Comment.findByIdAndUpdate(
		commentId,
		{
			$push: { replies: reply._id },
		},
		{ new: true, useFindAndModify: false }
	);

	return res.status(StatusCodes.CREATED).json({
		message: "Reply was created successfully ",
	});
};

const createALikeForABlogPost = async (req, res) => {
	const { userId } = req.user;
	const { blogId } = req.body;

	if (!mongoose.Types.ObjectId.isValid(blogId)) {
		throw new BadRequestError("Invalid blog request Id ");
	}

	if (!blogId) {
		return res.status(StatusCodes.NO_CONTENT).json({
			message: "userId is required",
		});
	}

	const isUserLikedABlogPost = await Blog.find({
		likes: { $elemMatch: { userId } },
	});

	if (!isUserLikedABlogPost) {
		// update the like for the blog
		await Blog.findByIdAndUpdate(
			blogId,
			{
				$push: { likes: userId },
			},
			{ new: true, useFindAndModify: false }
		);
	}

	return;
};

module.exports = {
	createPost,
	getABlogPost,
	deleteABlogPost,
	searchPost,
	updatePost,
	getAllPosts,
	createABlogPostComment,
	createAReplyToABlogComment,
	createALikeForABlogPost,
};
