const express = require("express");
const router = express.Router();
const contact  = require("../controllers/contact");

router.post("/contact", contact.contact());

module.exports = router;
