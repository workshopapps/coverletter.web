const express = require("express");
const router = express.Router();
const { register, updatePassword } = require("../controllers/authController");
const { login } = require("../controllers/authController");

//Add your routes here
router.post("/signup", register);

module.exports = router;
