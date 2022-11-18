const express = require("express");
const router = express.Router();
const { register,verify } = require("../controllers/authController");

//Add your routes here
router.post("/signup", register);
router.post("/verify", verify)

module.exports = router;
