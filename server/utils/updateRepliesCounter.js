const Reply = require("../models/Reply");
const Post = require("../models/Posts");

const getAllReplies = async (postId) => {
	return await Reply.find({ postId }).sort("createdAt");
};

module.exports = { getAllReplies };
