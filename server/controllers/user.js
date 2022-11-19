const { Request, Response } = require("express");
const UserSchema = require("../models/User");

const getSingleUserController = async (request, response) => {
	try {
		const user = await UserSchema.findById(request.params.id);
		if (!user) response.status(404).send("No User Found");

		response.status(200).send(letter);
	} catch (error) {
		response.status(500).send(error);
	}
};

module.exports = {
	getSingleUserController,
};
