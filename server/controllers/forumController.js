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

const getAReplyFromAForumPost = async (req, res) => {
	const { id } = req.params;

	const reply = await Reply.findOne({ _id: id });
	return res.status(StatusCodes.OK).json({ reply });
};

const likePost = async (req, res) => {
	const pid = req.params.pid;
	const forumPost = await Post.findOne({ _id: pid });
	if (!forumPost) {
		throw new BadRequestError("Unable To Find Post");
	}
	const getLike = await Like.findOne({
		userId:  req.user.userId,
		postId: pid,
	});

	if (!getLike) {
		await updatePostsLikesCounter(pid);
		const like = await Like.create({
			userId:  req.user.userId,
			postId: pid,
		});
		return res.status(StatusCodes.CREATED).json({ like });
	} else {
		if (getLike.likes !== false) {
			const like = await Like.findOneAndUpdate(
				{ userId:  req.user.userId, postId: pid },
				{ $set: { likes: false } },
				{ new: true, runValidators: true }
			);
			await updatePostsLikesCounter(pid);
			return res.status(StatusCodes.CREATED).json({ like });
		} else {
			const like = await Like.findOneAndUpdate(
				{ userId:  req.user.userId, postId: pid },
				{ $set: { likes: true } },
				{ new: true, runValidators: true }
			);
			await updatePostsLikesCounter(pid);
			return res.status(StatusCodes.CREATED).json({ like });
		}
	}
};
const deleteForumPost = async (req, res) => {
	const forum = await Post.findById(req.params.id);

	if (forum) {
		await Post.findByIdAndDelete(req.params.id);
		return res.status(StatusCodes.OK).json({
			message: `Forum Post with the id ${req.params.id} Deleted successfully`,
		});
	} else {
		return res.status(StatusCodes.NOT_FOUND).json({
			message: `Forum Post with the id ${req.params.id} does not exist`,
		});
	}
};

const updateForumPost = async (req, res) => {

	const {title, content} = req.body;
	const updatedPost = await Post.findByIdAndUpdate(req.params.id, {title, content}, {new:true})
	if(!updatedPost){
		throw new BadRequestError("You dont have permission to do that!");
	}
	return res.status(StatusCodes.OK).json({ status: 'success', post:{
		updatedPost
	} });
}

module.exports = {
	createForumPost,
	getAllForumPosts,
	replyForumPost,
	getOneForumPost,
	getAReplyFromAForumPost,
	getAllRepliesToAForumPost,
	likePost,
	deleteForumPost,
	updateForumPost
};
