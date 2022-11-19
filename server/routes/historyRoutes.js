const express = require("express");
const { router } = require("../app");
const routes = express.Router();
const {
	allUserLetterController,
	createLetter,
	deleteSingleLetterController,
} = require("../controllers/template");

//Add your routes here
routes.post("/history/letters/create", createLetter);
routes.get("/history/letters/:user_id", allUserLetterController);
routes.delete("/history/letter/:id", deleteSingleLetterController);

module.exports = routes;
