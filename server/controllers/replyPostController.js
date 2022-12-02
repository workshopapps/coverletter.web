const User = require("../models/User");
const Blog = require("../models/Blog");
const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const replyPost = async (req, res) => {
	const user = await User.findOne(req.params.userId);
	if (!user) {
		throw new BadRequestError(
			"You might not have the permision to perform this action"
		);
	} else {
		const reply = await Blog.findOne(
			req.params.postId,
			{
				$push: [
					{
						replies: req.body,
					},
				],
			},
			{ new: true }
		);
		return res
			.status(StatusCodes.CREATED)
			.json({ message: "You have successfully." });
	}
};

const getAllreplies = async (req, res) => {
	const getReply = await post.find(req.params.postId);
	const replyPost = getReply.replies;
	if (replyPost) {
		returnres.status(200).json({ replyPost });
	} else {
		throw new NotFoundError("No reply yet for this post");
	}
};

module.exports = {
	replyPost,
	getAllreplies,
};
