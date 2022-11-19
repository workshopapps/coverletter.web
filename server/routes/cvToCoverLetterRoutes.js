const express = require("express");
const router = express.Router();
const { cvUpload } = require("./cvUploadController");
const { sendCoverLetter } = require("./coverLetterGenerator");

router.post("/upload", cvUpload);
router.post("/generate", sendCoverLetter);

module.exports = router;
