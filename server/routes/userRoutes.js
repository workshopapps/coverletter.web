const express = require("express");
const routes = express.Router();
const { getSingleUserController } = require("../controllers/user");

//Add your routes here

routes.get("/user/:id", getSingleUserController);

module.exports = routes;
