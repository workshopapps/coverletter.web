const mongoose = require("mongoose");
const CoverLetter = require("../models/coverletter");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

/**
 * @desc It gets a cover Letter
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {object} the result
 */

const getACoverLetter = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		throw new BadRequestError(`Cover Letter with id ${id} does not exist.`);
	}

	const coverLetter = await CoverLetter.findOne({
		_id: id,
		user_id: req.user.userId,
	});

	if (!coverLetter) {
		throw new BadRequestError(`Cover Letter with id ${id} does not exist.`);
	}

	return res.status(StatusCodes.OK).json({
		message: "Cover Letter request was successfully.",
		data: coverLetter,
	});
};

/**
 * @desc It gets all the cover Letters created by a user
 *
 * @param {object} req
 * @param {object} res
 *
 * @returns {object} the object
 */

const getAllCoverLettersByAUser = async (req, res) => {
	const coverLetters = await CoverLetter.find({ user_id: req.user.userId });

	if (!coverLetters) {
		throw new NotFoundError(
			"This user doesn't have any saved cover letter"
		);
	}

	return res.status(StatusCodes.OK).json({
		message: "Cover Letters requested successfully",
		data: coverLetters,
	});
};

const deleteCoverLetter = async (req, res) => {
	const coverletter = await CoverLetter.findOne({
		_id: req.params.id,
		user_id: req.user.userId,
	});

	if (!coverletter) {
		throw new NotFoundError(
			`You can't delete cover Letter with the id ${req.params.id}`
		);
	}
	await CoverLetter.findByIdAndDelete(req.params.id);
	return res.status(StatusCodes.OK).json({
		message: `Cover Letter deleted with the id ${req.params.id} Deleted successfully`,
	});
};

const updateCoverLetter = async (req, res) => {
	try {
		const user_id = req.user.userId;

		let coverletter = await CoverLetter.findOne({
			_id: req.params.id,
			user_id,
		});

		if (!coverletter) {
			throw new BadRequestError(
				"Cover letter with that id can't be edited"
			);
		}

		coverletter = await CoverLetter.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);

		return res.status(StatusCodes.OK).json({ success: true, coverletter });
	} catch (error) {
		return res.status(400).json({ success: false, error: error.message });
	}
};

const saveCoverletter = async (req, res) => {
	const coverletter = await CoverLetter.create({
		...req.body,
		user_id: req.user.userId,
	});

	return res
		.status(StatusCodes.OK)
		.json({ message: "Cover Letter Saved successfully", coverletter });
};

module.exports = {
	getAllCoverLettersByAUser,
	deleteCoverLetter,
	getACoverLetter,
	updateCoverLetter,
	saveCoverletter,
};
