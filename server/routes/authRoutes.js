const express = require("express");
const router = express.Router();
const {
	register,
	updatePassword,
	forgotPassword,
	verify,
	login,
	resetPassword,
	validateOTP,
} = require("../controllers/authController");

//Add your routes here
router.post("/signup", register);
router.post("/verify", verify);
router.post("/reset_password", resetPassword);
router.post("/validate_otp", validateOTP);
router.put("/updatePassword", updatePassword);
router.post("/login", login);
router.post("/forgotPassword", forgotPassword);
// router.post('/resetPassword', resetPassword)

module.exports = router;
