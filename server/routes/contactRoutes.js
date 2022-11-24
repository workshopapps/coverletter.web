const express = require("express");
const router = express.Router();
const ContactController  = require("../controllers/contactUsController");


router.post("/contact", ContactController.contact);

module.exports = router;

