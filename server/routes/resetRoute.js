const express = require("express");
const router = express.Router();

const { resetPassword, validateOtp } = require("../controllers/resetPassword");

// forgot password route here
router.post("/reset_password", resetPassword);
router.post("/validate_otp", validateOtp);

module.exports = router;
