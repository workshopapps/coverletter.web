const express = require("express");
const router = express.Router();
const { register } = require("../controllers/auth");
const { validateOtp } = require("../controllers/auth");

//Add your routes here
router.post("/signup", register);
router.post("/validate_otp", validateOtp);

module.exports = router;
