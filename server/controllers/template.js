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

const updateSingleLetterController = async (request, response) => {
	try {
		await TemplateSchema.findByIdAndUpdate(request.params.id, request.body);
		await TemplateSchema.save();
		response.status(200).send(letter);
	} catch (error) {
		response.status(500).send(error);
	}
};

module.exports = {
	allLettersController,
	updateSingleLetterController,
};
