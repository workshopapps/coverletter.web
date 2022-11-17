const express = require("express");
const routes = express.Router();
const {
	createLetterController,
	allLettersController,
	getSingleLetterController,
	updateSingleLetterController,
} = require("../controllers/template");

//Add your routes here

routes.get("/history/letters", allLettersController);
routes.patch("/history/letter/:id", updateSingleLetterController);

module.exports = routes;
