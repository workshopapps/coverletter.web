const Post = require("../models/ForumPost");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const Reply = require("../models/ReplyToForum");
const {updatePostsRepliesCounter} = require("../utils/updateRepliesCounter");

const createForumPost = async (req, res) => {
	req.body.userId = req.user.userId;
	if (!req.body.title || !req.body.content)
		throw new BadRequestError("Cannot create post");
	const post = await Post.create(req.body);
	return res.status(StatusCodes.CREATED).json({ post });
};

const getAllForumPosts = async (req, res) => {
	try{
		const { page = 1, limit = 10 } = req.query;
		var posts = await Post.find({})
			.sort("CreatedAt")
			.limit(limit * 1)
			.skip((page - 1) * limit)
			.exec();
		return res.status(StatusCodes.OK).json({ posts });
	}catch(err){
		console.log(err)
	}

};

const replyForumPost = async (req, res) => {
	if (!req.body.content){
		throw new BadRequestError("Cannot create reply post");
	}
	const pid = req.params.pid
	const forumPost = await Post.findOne({_id:pid});
	if(!forumPost){
		throw new BadRequestError("Unable To Find Post")
	}
	req.body.postId = pid;
	req.body.userId = req.user.userId;
	const reply = await Reply.create(req.body);
	await updatePostsRepliesCounter(pid);
	return res.status(StatusCodes.CREATED).json({ reply });
};

module.exports = {
	createForumPost,
	getAllForumPosts,
	replyForumPost
};
