const express = require("express");
const router = express.Router();
const { cvUpload } = require("../controllers/cvUploadController");
const { sendCoverLetter } = require("../controllers/coverLetterGenerator");
const { saveCoverletter} = require("../controllers/saveCoverletter");
const {sendCoverLetterToMail} = require("../controllers/sendCoverLetterToMail");
const auth = require("../middleware/authentication");

router.post("/upload", cvUpload);
router.post("/generate", sendCoverLetter);
router.post("/saveCoverletter", auth, saveCoverletter);
router.post("/sendCoverLetter",sendCoverLetterToMail)


module.exports = router;
