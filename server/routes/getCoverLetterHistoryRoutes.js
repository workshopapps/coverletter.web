const express = require("express");
const router = express.Router();

const CoverLetter = require("../controllers/getCoverLetterHistory");


router.get("/:id/history", CoverLetter.GetCoverLetters)


module.exports = router;
