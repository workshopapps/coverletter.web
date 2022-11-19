const express = require("express");
const router = express.Router();
const contactUS = require("../controllers/contact");


//Add your routes here

router.post("/", contactUS.contact);

module.exports = router;