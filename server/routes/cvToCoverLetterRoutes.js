const express = require("express");
const router = express.Router();
const { cvUpload } = require("../controllers/cvUploadController");
const { sendCoverLetter } = require("../controllers/coverLetterGenerator");
const { uploadCoverLetter } = require("../controllers/coverletterUpload");

router.post("/upload", cvUpload);
router.post("/generate", sendCoverLetter);
router.post("/coverletterUpload", uploadCoverLetter);

module.exports = router;
