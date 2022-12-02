const Post = require("../models/Posts");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");

const createPost = async (req, res) => {
	req.body.userId = req.user.userId;
	if (!req.body.title || !req.body.content)
		throw new BadRequestError("Cannot create post");
	var post = await Post.create(req.body);
	return res.status(StatusCodes.CREATED).json({ post });
};

module.exports = {
    createPost
}