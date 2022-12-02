const Post = require("../models/Posts");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const {
	createView,
	updatePostsViewsCounter,
} = require("../utils/updateViewsCounter");

const createPost = async (req, res) => {
	req.body.userId = req.user.userId;
	if (!req.body.title || !req.body.content)
		throw new BadRequestError("Cannot create post");
	const post = await Post.create(req.body);
	return res.status(StatusCodes.CREATED).json({ post });
};

const getPost = async (req, res) => {
	const { id: postId } = req.params;
	const post = await Post.findOne({ _id: postId });
	if (!post) {
		throw new BadRequestError("Unable to find this post");
	}
	await createView(postId, req.user.userId);
	await updatePostsViewsCounter(postId);
	return res.status(StatusCodes.OK).json({ post });
};

const getAllPosts = async (req, res) => {
	const { page = 1, limit = 10 } = req.query;
	var posts = await Post.find({})
		.sort("CreatedAt")
		.limit(limit * 1)
		.skip((page - 1) * limit)
		.exec();
	return res.status(StatusCodes.OK).json({ posts });
};

module.exports = {
	createPost,
  getPost,
	getAllPosts,
};

