const express = require("express");
const router = express.Router();
const { register, updatePassword ,verify} = require("../controllers/authController");

//Add your routes here
router.post("/signup", register);
router.post("/verify",verify)
router.put("/updatePassword", updatePassword);

module.exports = router;
