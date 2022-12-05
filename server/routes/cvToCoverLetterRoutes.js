const express = require("express");
const router = express.Router();
const { cvUpload } = require("../controllers/cvUploadController");
const { sendCoverLetter } = require("../controllers/coverLetterGenerator");
const { uploadCoverLetter } = require("../controllers/saveCoverletter");
const { saveCoverletter } = require("../controllers/saveCoverletter");
const auth = require("../middleware/authentication");

router.post("/upload", cvUpload);
router.post("/generate", sendCoverLetter);
router.post("/coverletterUpload", uploadCoverLetter);
router.post("/saveCoverletter", auth, saveCoverletter);

module.exports = router;
