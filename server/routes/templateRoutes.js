const express = require("express");
const router = express.Router();

const {
	getACoverLetter,
	getAllCoverLettersByAUser,
	editACoverLetter,
} = require("../controllers/templateController");

const auth = require("../middleware/authentication");

// Add your template routes below this

router.get("/template/:id", auth, getACoverLetter);
router.get("/template", auth, getAllCoverLettersByAUser);
router.patch("/template/:id", auth, editACoverLetter);

module.exports = router;
