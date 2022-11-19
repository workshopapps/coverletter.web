const express = require("express");
const router = express.Router();
const { register, updatePassword ,verify, login} = require("../controllers/authController");

//Add your routes here
router.post("/signup", register);
router.post("/verify",verify)
router.put("/updatePassword", updatePassword);
router.post("/login", login);

module.exports = router;
