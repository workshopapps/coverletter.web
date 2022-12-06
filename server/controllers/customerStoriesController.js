const Admin = require("../models/Admin");
const User = require("../models/User");
const CustomerStories = require("../models/CustomerStories");
const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");

const createStory = async (req, res) => {
	const {
		adminId,
		userId,
		title,
		subTitle,
		introduction,
		challengeBody,
		challengeContent,
		solutionBody,
		solutionContent,
		outomeBody,
		outomeContent,
	} = req.body;
	if (
		!adminId ||
		!userId ||
		!title ||
		!subTitle ||
		!introduction ||
		!challengeBody ||
		!challengeContent ||
		!solutionBody ||
		!solutionContent ||
		!outomeBody ||
		!outomeContent
	)
		return res.status(StatusCodes.NO_CONTENT).json({
			message: "All Fields are required",
		});
	const admin = await Admin.findOne({
		_id: adminId,
	});
	if (!mongoose.Types.ObjectId.isValid(adminId) || !admin) {
		throw new BadRequestError(
			"This adminId is not valid or the admin does not exist in our database."
		);
	}

	const user = await User.findOne({
		_id: userId,
	});
	if (!mongoose.Types.ObjectId.isValid(userId) || !user) {
		throw new BadRequestError(
			"This userId is not valid or the admin does not exist in our database."
		);
	}
	const story = new CustomerStories({
		adminId,
		userId,
		title,
		subTitle,
		introduction,
		challengeBody,
		challengeContent,
		solutionBody,
		solutionContent,
		outomeBody,
		outomeContent,
	});
	await story.save();

	return res.status(StatusCodes.CREATED).json({
		message: "Creation of customer story was successful.",
	});
};

module.exports = {
	createStory,
};
