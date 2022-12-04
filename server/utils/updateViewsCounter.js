const Views = require("../models/Views");
const Post = require("../models/ForumPost");

const createView = async (postId, userId) => {
	const viewedAlready = await Views.findOne({
		userId: userId,
		postId: postId,
	});
	if (viewedAlready) {
		return null;
	}

	return await Views.create({
		postId: postId,
		userId: userId,
	});
};

const getAllViews = async (postId) => {
	return await Views.find({
		postId: postId
	});
};

const updatePostsViewsCounter = async (postId) => {
	const getAll = await getAllViews(postId);
	const length = getAll.length;
	return await Post.findOneAndUpdate(
		{ _id: postId },
		{
			$set: {
				viewCounter: length,
			},
		},
		{
			new: true,
			runValidators: true,
		}
	);
};
module.exports = {
	createView,
	updatePostsViewsCounter,
};
