const express = require("express");
const router = express.Router();
const { cvUpload } = require("../controllers/cvUploadController");
const { sendCoverLetter } = require("../controllers/coverLetterGenerator");
const {
	sendCoverLetterToMail,
} = require("../controllers/sendCoverLetterToMail");

router.post("/upload", cvUpload);
router.post("/generate", sendCoverLetter);
router.post("/sendCoverLetter", sendCoverLetterToMail);

module.exports = router;
