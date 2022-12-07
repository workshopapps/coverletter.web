const Post = require("../models/ForumPost");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const Reply = require("../models/ReplyToForum");
const Like = require("../models/Likes");

const {
	updatePostsRepliesCounter,
	getAllReplies,
} = require("../utils/updateRepliesCounter");

const { updatePostsLikesCounter } = require("../utils/updateLikesCounter");

const {
	createView,
	updatePostsViewsCounter,
} = require("../utils/updateViewsCounter");

const createForumPost = async (req, res) => {
	req.body.userId = req.user.userId;
	if (!req.body.title || !req.body.content)
		throw new BadRequestError("Cannot create post");
	const post = await Post.create(req.body);
	return res.status(StatusCodes.CREATED).json({ post });
};

const getAllForumPosts = async (req, res) => {
	try {
		const { page = 1, limit = 10 } = req.query;
		var posts = await Post.find({})
			.sort("CreatedAt")
			.limit(limit * 1)
			.skip((page - 1) * limit)
			.exec();
		return res.status(StatusCodes.OK).json({ posts });
	} catch (err) {
		console.log(err);
	}
};

const replyForumPost = async (req, res) => {
	if (!req.body.content) {
		throw new BadRequestError("Cannot create reply post");
	}
	const pid = req.params.pid;
	const forumPost = await Post.findOne({ _id: pid });
	if (!forumPost) {
		throw new BadRequestError("Unable To Find Post");
	}
	req.body.postId = pid;
	req.body.userId = req.user.userId;
	await updatePostsRepliesCounter(pid);
	const reply = await Reply.create(req.body);
	return res.status(StatusCodes.CREATED).json({ reply });
};

const getOneForumPost = async (req, res) => {
	const { id: postId } = req.params;
	await createView(postId, req.user.userId);
	await updatePostsViewsCounter(postId);
	const post = await Post.findOne({ _id: postId });
	if (!post) {
		throw new BadRequestError("Unable to find this post");
	}
	return res.status(StatusCodes.OK).json({ post });
};

const getAllRepliesToAForumPost = async (req, res) => {
	const { pid: postId } = req.params;
	const replies = await getAllReplies(postId);
	return res.status(StatusCodes.CREATED).json({ replies });
};

const likePost = async (req, res) => {
	req.body.userId = req.user.userId;
	const pid = req.params.pid;
	req.body.postId = pid
	const forumPost = await Post.findOne({ _id: pid });
	if (!forumPost) {
		throw new BadRequestError("Unable To Find Post");
	}
	const getLike = await Like.findOne({
		userId: req.body.userId,
		postId: req.body.postId,
	});

	if (!getLike) {
		await updatePostsLikesCounter(pid);
		const like = await Like.create(req.body);
		return res.status(StatusCodes.CREATED).json({ like });
	} else {
		if (getLike.likes !== false) {
			const like = await Like.findOneAndUpdate(
				{ userId: req.body.userId, postId: req.body.postId },
				{ $set: { likes: false } },
				{ new: true, runValidators: true }
			);
			await updatePostsLikesCounter(pid);
			return res.status(StatusCodes.CREATED).json({ like });
		} else{
			const like = await Like.findOneAndUpdate(
				{ userId: req.body.userId, postId: req.body.postId },
				{ $set: { likes: true } },
				{ new: true, runValidators: true }
			);
			await updatePostsLikesCounter(pid);
			return res.status(StatusCodes.CREATED).json({ like });
		}
	}
	
};

module.exports = {
	createForumPost,
	getAllForumPosts,
	replyForumPost,
	getOneForumPost,
	getAllRepliesToAForumPost,
	likePost,
};
