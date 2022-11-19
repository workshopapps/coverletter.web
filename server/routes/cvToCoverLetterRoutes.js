const express = require("express");
const router = express.Router();
const { cvUpload } = require("../controllers/cvUploadController");
const { sendCoverLetter } = require("../controllers/coverLetterGenerator");

router.post("/upload", cvUpload);
router.post("/generate", sendCoverLetter);

module.exports = router;
