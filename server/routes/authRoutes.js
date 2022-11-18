const express = require("express");
const router = express.Router();
const { register } = require("../controllers/authController");
const { contact } = require("../controllers/contact");

//Add your routes here
router.post("/signup", register);
router.post("/contact", contact);

module.exports = router;
