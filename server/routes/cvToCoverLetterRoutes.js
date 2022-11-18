const express = require("express");
const router = express.Router();
const { cvUpload } = require("./cv.upload.controller");
const { sendCoverLetter } = require("./cover.letter.generator");

router.post("/upload", cvUpload);
router.post("/generate", sendCoverLetter);

module.exports = router;
