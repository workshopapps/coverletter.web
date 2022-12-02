const Views = require("../models/Views");
const Post = require("../models/Posts");

const createView = async (postId, userId) => {
	const viewedAlready = await Views.findOne({ userId: userId });

	if (viewedAlready) {
		return null;
	}

	return await Views.create({ postId: postId, userId: userId });
};



module.exports = {createView}