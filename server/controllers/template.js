const { Request, Response } = require("express");
const TemplateSchema = require("../models/Template");

const allLettersController = async (request, response) => {
	const letters = await TemplateSchema.find({});
	try {
		response.send(letters);
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

module.exports = {
	allLettersController,
	deleteSingleLetterController,
};
