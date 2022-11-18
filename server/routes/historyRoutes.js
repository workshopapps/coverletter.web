const express = require("express");
const routes = express.Router();
const {
	allLettersController,

	deleteSingleLetterController,
} = require("../controllers/template");

//Add your routes here

routes.get("/history/letters", allLettersController);
routes.delete("/history/letter/:id", deleteSingleLetterController);

module.exports = routes;
