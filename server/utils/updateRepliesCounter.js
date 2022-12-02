const Reply = require("../models/Reply");
const Post = require("../models/ForumPost");

const getAllReplies = async (postId) => {
	return await Reply.find({ postId }).sort("createdAt");
};

const updatePostsRepliesCounter = async (postId) => {
	const getAll = await getAllReplies(postId);
	const length = getAll.length;
	return await Post.findOneAndUpdate(
		postId,
		{ $set: { repliesCounter: length } },
		{ new: true, runValidators: true }
	);
};

module.exports = { updatePostsRepliesCounter, getAllReplies };
