const { Request, Response } = require("express");
const Template = require("../models/Template");
const TemplateSchema = require("../models/Template");

const allUserLetterController = async (request, response) => {
	const { user_id } = request.params;
	// console.log(user_id);
	try {
		const letters = await Template.findById({ user_id });
		response.status(200).json(letters);
	} catch (error) {
		response.status(500).send(error);
	}
};

const deleteSingleLetterController = async (request, response) => {
	try {
		const letter = await TemplateSchema.findByIdAndDelete(
			request.params.id
		);
		if (!letter) response.status(404).send("No item found");
		response.status(200).send();
	} catch (error) {
		response.status(500).send(error);
	}
};

const createLetter = async (req, res) => {
	const { user_id, template } = req.body;

	const newLetter = new Template({
		user_id,
		template,
	});

	const saveLetter = await newLetter.save();

	res.status(201).json(saveLetter);
};

module.exports = {
	createLetter,
	allUserLetterController,
	deleteSingleLetterController,
};
