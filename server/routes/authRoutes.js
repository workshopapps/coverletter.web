const express = require("express");
const router = express.Router();
const { register, updatePassword } = require("../controllers/authController");
const { login } = require("../controllers/authController");

//Add your routes here
router.post("/signup", register);
router.post("/login", login);

//Add your routes here
router.post("/signup", register);
router.put("/updatePassword", updatePassword);

module.exports = router;
