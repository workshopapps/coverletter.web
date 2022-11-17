const express = require("express");
const router = express.Router();
const { register } = require("../controllers/auth");
const { login } = require("../controllers/auth");

//Add your routes here
router.post("/signup", register);
router.post("/login", login);

module.exports = router;
