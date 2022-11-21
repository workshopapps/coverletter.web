// const express = require("express");
// const router = express.Router();
// const ContactController  = require("../controllers/contactController");


// router.post("/contact", ContactController.contact);

module.exports = router;
const express = require("express");
const router = express.Router();
const { cvUpload } = require("../controllers/cvUploadController");
// const { sendCoverLetter } = require("../controllers/coverLetterGenerator");

router.post("/uploads", cvUpload);
// router.post("/generate", sendCoverLetter);

module.exports = router;

