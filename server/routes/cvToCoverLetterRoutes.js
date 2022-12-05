const express = require("express");
const router = express.Router();
const { cvUpload } = require("../controllers/cvUploadController");
const { sendCoverLetter } = require("../controllers/coverLetterGenerator");
const { uploadCoverLetter } = require("../controllers/saveCoverletter");
const { saveCoverletter,updateCoverLetter } = require("../controllers/saveCoverletter");
const auth = require("../middleware/authentication");
const { getACoverLetter } = require("../controllers/coverLetterController");

router.post("/upload", cvUpload);
router.post("/generate", sendCoverLetter);
router.post("/coverletterUpload", uploadCoverLetter);
router.post("/saveCoverletter", auth, saveCoverletter);
router.put("/updatecoverletter/:id",auth,updateCoverLetter)

module.exports = router;
