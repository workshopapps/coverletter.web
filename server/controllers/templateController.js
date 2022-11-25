const Template = require("../models/Template");

const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const mongoose = require("mongoose");

/**
 * @desc It gets all the convert Letters created by a user
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {object} the object
 */

const getAllConvertLettersByAUser = async (req, res) => {
	const { id } = req.user;
	const template = await Template.find({ user_id: id }).exec();

	if (!template) {
		return res.status(404).json({
			error: "Template does not exist",
		});
	}

	return res.status(StatusCodes.OK).json({
		message: "Template requested successfully",
		data: template,
	});
};

/**
 * @desc It edits a convert Letter
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {object} the result
 */

const editACovertLetter = async (req, res) => {
	const { id } = req.params;
	const { template } = req.body;
	const isTemplateIdValid = !!id || template;

	if (!isTemplateIdValid) {
		throw new BadRequestError("Invalid template request");
	}

	const editedTemplate = await Template.update(
		{ _id: id },
		{ $set: { template: template } }
	).exec();

	return res.status(StatusCodes.OK).json({
		message: "Template edited successfully",
		data: editedTemplate,
	});
};

const deleteCoverLetter = async (req, res) => {
	const { userId, templateId } = req.body;

	if (!mongoose.Types.ObjectId.isValid(userId))
		return res.status(404).json({ message: "This user id is not valid!" });

	const template = await Template.findByIdAndDelete({ id: templateId });

	return res.status(StatusCodes.OK).json({
		message: "Cover Letter deleted successfully",
	});
};

module.exports = {
	getAllConvertLettersByAUser,
	editACovertLetter,
	deleteCoverLetter,
};
