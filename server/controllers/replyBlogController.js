const Blog = require("../models/Blog");
const User = require("../models/User");
const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const replyPost = async (req, res) => {
	try {
		const ReplyPost = await Blog.findByIdAndUpdate(req.params.postId, {
			$push: { replies: req.body },
		}, {new : true});
		const savePost = ReplyPost.save()
		if (!savePost) {
			throw new BadRequestError(
				res.json({ message: "Your request wasn't successfull" })
			);
		} else {
			return res.status(StatusCodes.OK).json({ ReplyPost });
		}
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

const getAllreplies = async (req, res) => {
	try {
		const id = req.params.postId;
		const postId = mongoose.Types.ObjectId.isValid(id);
		const getReply = await Blog.findById({ _id: postId });
		const allReplies = getReply.replies;
		if (!allReplies) {
			throw new NotFoundError(
				res.json({
					message: "Sorry we can't find any replies for this post",
				})
			);
		} else {
			return res.status(200).json({ allReplies });
		}
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

module.exports = {
	replyPost,
	getAllreplies,
};
