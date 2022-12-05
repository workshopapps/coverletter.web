const CoverLetter = require("../models/coverletter");

const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const mongoose = require("mongoose");

/**
 * @desc It gets a cover Letter
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {object} the result
 */

 const getACoverLetter = async (req, res) => {
	const { userId } = req.user;
	const { id: coverLetterId } = req.params;

	if (!mongoose.Types.ObjectId.isValid(coverLetterId)) {
		throw new BadRequestError(`Cover Letter Blog ID request.`);
	}

	const coverLetter = await CoverLetter.findOne({
		_id: coverLetterId,
		user_id: userId,
	});

	if (!coverLetter) {
		throw new BadRequestError(
			`Cover Letter with id ${coverLetterId} does not exist.`
		);
	}

	return res.status(StatusCodes.OK).json({
		message: "Cover Letter request was successfully.",
		data: coverLetter,
	});
};

/**
 * @desc It gets all the convert Letters created by a user
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {object} the object
 */

const getAllCoverLettersByAUser = async (req, res) => {
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
 * @desc It edits a cover Letter
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {object} the result
 */

const editACoverLetter = async (req, res) => {
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
	const { templateId } = req.params;

	if (!mongoose.Types.ObjectId.isValid(templateId))
		return res.status(404).json({ message: "This user id is not valid!" });

	const checkIfTemplateExists = await Template.find({}).count();

	if (!checkIfTemplateExists < 1) {
		const template = await Template.findByIdAndDelete({ id: templateId });
		return res.status(StatusCodes.OK).json({
			message: `Cover Letter deleted with the id ${templateId} successfully`,
		});
	} else {
		return res.status(StatusCodes.NOT_FOUND).json({
			message: `Cover Letter with the id ${templateId} does not exist`,
		});
	}
};

module.exports = {
	getAllCoverLettersByAUser,
	editACoverLetter,
	deleteCoverLetter,
	getACoverLetter,
};
