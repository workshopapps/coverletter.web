require("dotenv").config();
const Admin = require("../models/Admin");
const CustomerStories = require("../models/CustomerStories");
const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const createPost = async (req, res) => {
	const {
		adminId,
		fullName,
		job,
		title,
		subTitle,
		introduction,
		challenge,
		solution,
		outcome,
	} = req.body;
	if (
		!adminId ||
		!fullName ||
		!job ||
		!title ||
		!subTitle ||
		!introduction ||
		!challenge ||
		!solution ||
		!outcome
	)
		return res.status(StatusCodes.NO_CONTENT).json({
			message: "All Fields are required",
		});
	const admin = await Admin.findOne({
		id: adminId,
	});
	if (!mongoose.Types.ObjectId.isValid(adminId) || !admin) {
		throw new BadRequestError(
			"This adminId is not valid or the admin does not exist in our database."
		);
	}
	const story = new CustomerStories({
		fullName,
		job,
		title,
		subTitle,
		introduction,
		challenge,
		solution,
		outcome,
	});
	await story.save();

	return res.status(StatusCodes.CREATED).json({
		message: "Creation of customer story was successful.",
	});
};

module.exports = {
	createPost,
};
