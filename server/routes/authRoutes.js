const express = require("express");
const router = express.Router();
const { register, forgotPassword } = require("../controllers/authController");

//Add your routes here
router.post("/signup", register);
router.post("/forgotPassword", forgotPassword);
// router.post('/resetPassword', resetPassword)

module.exports = router;
