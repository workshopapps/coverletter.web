require("dotenv").config();
const Admin = require("../models/Admin");
const Blog = require("../models/Blog");
const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");

const createPost = async (req, res) => {
	const { adminId, title, content } = req.body;
	if (!adminId || !title || !content)
		return res
			.status(StatusCodes.NO_CONTENT)
			.json({ message: "All Fields are required" });
	const admin = await Admin.findOne({ id: adminId });
	if (!mongoose.Types.ObjectId.isValid(adminId) || !admin) {
		throw new BadRequestError(
			"This adminId is not valid or the admin does not exist in our database."
		);
	}
	const post = new Blog({ title, content });
	await post.save();

	return res
		.status(StatusCodes.CREATED)
		.json({ message: "Creation of blog post was successful." });
};

const getAllPosts = async (req, res) => {
	const result = await Blog.find()
	
	if (result){
		return res
			.status(200)
			.json({ message: "Successfully retrieved." });
	}
	else{
		throw new BadRequestError(
			"Post not found"
		);
	}
}

const getOnePost = async (req, res) => {
	const result = await Blog.findOne(req.params.blogId)
	
	if (result){
		return res
			.status(200)
			.json({ message: "Successfully retrieved." });
	}
	else{
		throw new BadRequestError(
			"Post not found"
		);
	}
}


module.exports = {
	createPost,
	getAllPosts,
	getOnePost,
};