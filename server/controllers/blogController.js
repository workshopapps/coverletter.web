require("dotenv").config();
const Blog = require("../models/Blog");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");

const createPost = async (req, res) => {
	const { adminId, title, content, likes } = req.body;
	const admin = await User.findOne(adminId);
	if (!admin)
		return res
			.status(StatusCodes.NOT_FOUND)
			.json({ message: "This admin does not exist in our database" });
	const post = new Blog({ adminId, title, content, likes });
	await post.save();

	return res
		.status(StatusCodes.CREATED)
		.json("Creation of blog post was successful.");
};

module.exports = {
	createPost,
};
