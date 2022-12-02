const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const BlogPost = require("../models/Blog.js");

const replyPost = async (req, res) => {
	try {
		const reply = await BlogPost.findByIdAndUpdate(
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

		if (!reply) {
			throw new BadRequestError("Can't perform this action.");
		} else {
			return res.status(StatusCodes.CREATED).json({ reply });
		}
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

// Get all replies for a post

const getAllreplies = async (req, res) => {
	try {
		const getReply = await BlogPost.find(req.params.postId);
		const replyPost = getReply.replies;
		if (replyPost) {
			return res.status(200).json({ replyPost });
		} else {
			throw new BadRequestError("Nothing to see here");
		}
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = {
	replyPost,
	getAllreplies,
};
