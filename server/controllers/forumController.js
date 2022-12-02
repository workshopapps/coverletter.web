const Post = require("../models/ForumPost");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");

const createForumPost = async (req, res) => {
	req.body.userId = req.user.userId;
	console.log("here")
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

module.exports = {
	createForumPost,
	getAllForumPosts,
};
