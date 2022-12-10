require("dotenv").config();
const Admin = require("../models/Admin");
const Blog = require("../models/Blog");
const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const Reply = require("../models/Reply");
const Comment = require("../models/Comment");

const createPostImage = async (req, res) => {
	try {
		const { public_id, url } = req.upload;
		return res.status(StatusCodes.CREATED).json({
			status: "success",
			data: { imageCloudinaryId: public_id, imageUrl: url },
		});
	} catch (error) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			status: "fail",
			message: error.message,
		});
	}
};

const createPost = async (req, res) => {
	const { title, content, imageCloudinaryId, imageUrl } = req.body;
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
		imageUrl,
		imageCloudinaryId,
	});
	await post.save();

	return res.status(StatusCodes.CREATED).json({
		status: "success",
		data: post,
	});
};

const deleteABlogPost = async (req, res) => {
	const { id: blogId } = req.params;

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
	const { content } = req.body;
	const { id: blogId } = req.params;

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

	const createdComment = await comment.save();

	// update the replies for the comment schema

	await Blog.findByIdAndUpdate(
		blogId,
		{
			$push: { comments: createdComment.id },
		},
		{ new: true, useFindAndModify: false }
	);

	return res.status(StatusCodes.CREATED).json({
		message: "Comment was created successfully ",
		data: createdComment,
	});
};

const createAReplyToABlogComment = async (req, res) => {
	// this req.user comes from the token through the auth middleware in request header
	const { userId } = req.user;
	const { content } = req.body;
	const { id: commentId } = req.params;

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
		data: reply,
	});
};

const createALikeForABlogPost = async (req, res) => {
	const { userId } = req.user;
	const { id: blogId } = req.params;

	if (!mongoose.Types.ObjectId.isValid(blogId)) {
		throw new BadRequestError("Invalid blog request Id ");
	}

	if (!blogId) {
		return res.status(StatusCodes.NO_CONTENT).jsPon({
			message: "userId is required",
		});
	}

	const getBlog = await Blog.findById(blogId);

	if (!getBlog) {
		return res.status(StatusCodes.NOT_FOUND).json({
			message: `Blog  ${blogId} does not exist`,
		});
	}

	const hasUserLikedBlogPost = await Blog.find({
		_id: { $in: [blogId] },
		likes: { $in: [userId] },
	});

	//check if user already liked the blog post
	if (hasUserLikedBlogPost.length < 1) {
		// update the like for the blog
		const blog = await Blog.findByIdAndUpdate(
			blogId,
			{
				$push: {
					likes: userId,
				},
			},
			{ new: true, useFindAndModify: false }
		);
		return res.status(StatusCodes.CREATED).json({
			message: `Blog liked by user ${userId} successfully `,
			data: blog,
		});
	}

	return res.status(StatusCodes.BAD_REQUEST).json({
		message: `Blog already liked by user ${userId}`,
	});
};

module.exports = {
	createPostImage,
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
