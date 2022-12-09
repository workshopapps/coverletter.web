const Likes = require("../models/Likes");
const Post = require("../models/ForumPost");

const getAllLikes = async (postId) => {
	return await Likes.find({
		postId: postId,
        likes: true,
	});
};

const updatePostsLikesCounter = async (postId) => {
	const getAll = await getAllLikes(postId);
	const length = getAll.length;
	return await Post.findOneAndUpdate(
		{ _id: postId },
		{
			$set: {
				likesCounter: length,
			},
		},
		{
			new: true,
			runValidators: true,
		}
	);
};
module.exports = {
    updatePostsLikesCounter
};
