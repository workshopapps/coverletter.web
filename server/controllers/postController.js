const Post = require("../models/Posts");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");

const createPost = async (req, res) => {
	req.body.userId = req.user.userId;
	if (!req.body.title || !req.body.content)
		throw new BadRequestError("Cannot create post");
	const post = await Post.create(req.body);
	return res.status(StatusCodes.CREATED).json({ post });
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
	getAllPosts,
};
