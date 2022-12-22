const express = require("express");
const router = express.Router();

const {
	getAllCoverLettersByAUser,
	getACoverLetter,
	deleteCoverLetter,
	updateCoverLetter,
	saveCoverletter,
} = require("../controllers/coverLetterController");

const auth = require("../middleware/authentication");
const verify = require("../middleware/verify");
// Add your template routes below this

router.post("/saveCoverletter", auth, verify, saveCoverletter);
router.get("/coverLetter/:id", auth, getACoverLetter);
router.get("/template", auth, getAllCoverLettersByAUser);
router.delete("/coverLetter/:id", auth, deleteCoverLetter);
router.patch("/template/:id", auth, updateCoverLetter);

module.exports = router;
