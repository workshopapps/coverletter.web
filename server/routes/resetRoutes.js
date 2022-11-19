const express = require("express");
const router = express.Router();

const { resetPassword, validateOTP } = require("../controllers/resetPassword");

// forgot password route here
router.post("/reset_password", resetPassword);
router.post("/validate_otp", validateOTP);

module.exports = router;
