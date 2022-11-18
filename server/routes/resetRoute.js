const express = require("express");
const router = express.Router();

const { forgotPassword, validateOtp } = require("../controllers/resetPassword");

// forgot password route here
router.post("/forgot", forgotPassword);
router.post("/validate_otp", validateOtp);

module.exports = router;
