const express = require("express");
const router = express.Router();
const { login } = require("../controllers/authController");
const {
	register,
	updatePassword,
	forgotPassword,
	verify,
} = require("../controllers/authController");

//Add your routes here
router.post("/signup", register);
router.post("/verify", verify);
router.put("/updatePassword", updatePassword);
router.post("/login", login);
router.post("/forgotPassword", forgotPassword);
// router.post('/resetPassword', resetPassword)

module.exports = router;
