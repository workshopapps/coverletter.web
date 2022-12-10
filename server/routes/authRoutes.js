const express = require("express");
const router = express.Router();
const passport = require("passport");
const auth = require("../middleware/authentication");
const { uploadImage } = require("../middleware/image");
const {
	register,
	updatePassword,
	forgotPassword,
	verify,
	login,
	logout,
	getUserDetails,
	validateOTP,
	resetPassword,
	googleSuccess,
	googleLogout,
	adminLogin,
	updateUser,
	updateProfileIcon,
} = require("../controllers/authController");

//Add your routes here
router.post("/signup", register);
router.post("/verify", verify);
router.post("/login", login);
router.post("/logout", auth, logout);
router.get("/dashboard/:id", auth, getUserDetails);
router.post("/forgotPassword", forgotPassword);
router.post("/admin/login", adminLogin);
router.put("/", auth, updateUser);

router.post("/validateOTP", validateOTP);
//GOOGLE auth routes
router.get(
	"/google",
	passport.authenticate("google", {
		scope: ["profile", "email"],
	})
);

router.get(
	"/google/callback",
	passport.authenticate("google", {
		failureRedirect: "https://coverly.hng.tech/signup",
		successRedirect: process.env.CLIENT_URL,
	})
);
router.get("/googlelogout", googleLogout);

router.get("/success", googleSuccess);

// All After login routes goes below PROTECT ROUTE
// router.use(protect);
router.post("/resetPassword", auth, resetPassword);
router.put("/updatePassword", auth, updatePassword);
// router.post('/resetPassword', resetPassword)
router.patch("/dashboard/update-icon", auth, uploadImage, updateProfileIcon);

module.exports = router;
