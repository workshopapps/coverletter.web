const express = require("express");
const router = express.Router();

const {
	editACoverLetter,
	getAllCoverLettersByAUser,
	getACoverLetter,
	deleteCoverLetter,
} = require("../controllers/coverLetterController");

const auth = require("../middleware/authentication");

// Add your template routes below this

router.get("/coverLetter/:id", auth, getACoverLetter);

router.get("/template", auth, getAllCoverLettersByAUser);
router.delete("/coverLetter/:id", auth, deleteCoverLetter);
router.patch("/template/:id", auth, editACoverLetter);

module.exports = router;
