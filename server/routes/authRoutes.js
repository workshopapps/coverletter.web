const express = require("express");
const router = express.Router();
const passport = require("passport");
const auth = require("../middleware/authentication");
const {
	register,
	updatePassword,
	forgotPassword,
	verify,
	protect,
	login,
	logout,
	getUserDetails,
	validateOTP,
	resetPassword,
	googleLogin,
	googleSuccess,
	adminLogin
} = require("../controllers/authController");

//Add your routes here
router.post("/signup", register);
router.post("/verify", verify);
router.post("/login", login);
router.post("/logout", auth, logout);
router.get("/dashboard/:id", auth, getUserDetails);
router.post("/forgotPassword", forgotPassword);
router.post('/admin/login', adminLogin)

router.post("/validateOTP", validateOTP);
//GOOGLE auth routes
router.get(
	"/google",
	passport.authenticate("google", {
		scope: ["profile", "email"]
	})
);

router.get(
	"/google/callback",
	passport.authenticate("google", {
		failureRedirect: "https://coverly.hng.tech/register",
	}),
	googleLogin
);
router.get("/success", googleSuccess);

// All After login routes goes below PROTECT ROUTE
// router.use(protect);
router.post("/resetPassword", resetPassword);
router.put("/updatePassword", auth, updatePassword);
// router.post('/resetPassword', resetPassword)

module.exports = router;