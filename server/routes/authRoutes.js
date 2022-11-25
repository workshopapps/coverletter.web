const express = require("express");
const router = express.Router();
const {
	register,
	updatePassword,
	forgotPassword,
	verify,
	protect,
	login,
	validateOTP,
	resetPassword,
} = require("../controllers/authController");

//Add your routes here
router.post("/signup", register);
router.post("/verify", verify);
router.post("/login", login);
router.post("/forgotPassword", forgotPassword);
router.post("/validateOTP", validateOTP);
router.post("/resetPassword", resetPassword);

// All After login routes goes below PROTECT ROUTE
router.use(protect);
router.put("/updatePassword", updatePassword);
// router.post('/resetPassword', resetPassword)

module.exports = router;
