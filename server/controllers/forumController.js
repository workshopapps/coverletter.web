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


const getOneForumPost = async (req, res) => {
	try{
		const { id: postId } = req.params;
		const post = await Post.findOne({ _id: postId });
		if (!post) {
			throw new BadRequestError(res.status(404).json({message: "Post not found."}));
		}else{
			return res.status(200).json({post})
		}
	}catch(err){
		res.status(500).json({message: err.message})
	}
}

module.exports = {
	createForumPost,
	getAllForumPosts,
	getOneForumPost
};
