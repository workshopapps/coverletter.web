const express = require("express");
const { StatusCodes } = require("http-status-codes");
const router = express.Router();
const passport = require("passport");
const {
	register,
	updatePassword,
	forgotPassword,
	verify,
	protect,
	login,
	getUserDetails,
	validateOTP,
	resetPassword,
} = require("../controllers/authController");

//Add your routes here
router.post("/signup", register);
router.post("/verify", verify);
router.post("/login", login);
router.post("/dashboard", getUserDetails);
router.post("/forgotPassword", forgotPassword);

router.post("/validateOTP", validateOTP);

router.get(
	"/google",
	passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
	"/google/callback",
	passport.authenticate("google", { failureRedirect: "/error" }),
	function (req, res) {
		console.log(req);
		res.status(StatusCodes.OK).json(req.user);
	}
);

// All After login routes goes below PROTECT ROUTE
router.use(protect);
router.post("/resetPassword", resetPassword);
router.put("/updatePassword", updatePassword);
// router.post('/resetPassword', resetPassword)

module.exports = router;
