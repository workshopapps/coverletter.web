const Reply = require("../models/ReplyToForum");
const forumPost = require("../models/ForumPost");

const getAllReplies = async (postId) => {
	return await Reply.find({ postId: postId }).sort("createdAt");
};

const updatePostsRepliesCounter = async (postId) => {
	const getAll = await getAllReplies(postId);
	const length = getAll.length;
	return await forumPost.findOneAndUpdate(
		{ _id: postId },
		{ $set: { repliesCounter: length } },
		{ new: true, runValidators: true }
	);
};

module.exports = { updatePostsRepliesCounter, getAllReplies };
