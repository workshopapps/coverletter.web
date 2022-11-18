const Template = require("../models/Template");

const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");

/**
 * @desc It gets all the convert Letters created by a user
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {object} the object
 */

const getAllConvertLettersByAUser = async (req, res) => {
	try {
		const template = await Template.find({}).exec();

		if (!template) {
			return res.status(404).json({
				error: "Template does not exist",
			});
		}

		return res.status(200).json({
			message: "Template requested successfully",
			data: template,
		});
	} catch (err) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
	}
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
	try {
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

		return res.status(200).json({
			message: "Template edited successfully",
			data: editedTemplate,
		});
	} catch (err) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
	}
};

module.exports = {
	getAllConvertLettersByAUser,
	editACovertLetter,
};
