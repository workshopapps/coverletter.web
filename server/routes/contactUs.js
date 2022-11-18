const express = require("express");
const router = express.Router();
const contact = require("../controllers/contact");

//Add your routes here
router.post("/contact", contact.ContactUs);

module.exports = router;
