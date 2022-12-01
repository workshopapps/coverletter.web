const Template = require("../models/Template");

const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");
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
	try {
		const { id } = req.params;
		const isTemplateIdValid = !!id;
		if (!isTemplateIdValid) {
			throw new BadRequestError("Invalid template ID");
		}

		const template = await Template.findById(id);

		if (!template) {
			throw new NotFoundError("Template does not exist");
		}

		return res.status(StatusCodes.OK).json({
			message: "Template requested successfully",
			data: template,
		});
	} catch (err) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
	}
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
	const template = await Template.find({ user_id: id });

	if (!template) {
		throw new NotFoundError("Template does not exist");
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

	const editedTemplate = await Template.findByIdAndUpdate(id, {
		$set: { template: template },
	});

	return res.status(StatusCodes.OK).json({
		message: "Template edited successfully",
		data: editedTemplate,
	});
};

const deleteCoverLetter = async (req, res) => {
	const { templateId } = req.params;

	if (!mongoose.Types.ObjectId.isValid(templateId)) {
		throw new NotFoundError("Template not found");
	}
	const checkIfTemplateExists = await Template.find({}).count();

	if (checkIfTemplateExists < 1) {
		throw new NotFoundError(
			`Cover Letter with the id ${templateId} does not exist`
		);
	}

	await Template.findByIdAndDelete({ id: templateId });
	return res.status(StatusCodes.OK).json({
		message: `Cover Letter deleted with the id ${templateId} successfully`,
	});
};

module.exports = {
	getAllCoverLettersByAUser,
	editACoverLetter,
	deleteCoverLetter,
	getACoverLetter,
};
