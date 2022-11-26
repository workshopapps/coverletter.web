const express = require("express");
const router = express.Router();

const {
	editACoverLetter,
	getAllCoverLettersByAUser,
	deleteCoverLetter,
} = require("../controllers/templateController");

const auth = require("../middleware/authentication");

// Add your template routes below this

router.get("/template", auth, getAllCoverLettersByAUser);
router.delete("/template/:id", auth, deleteCoverLetter);
router.patch("/template/:id", auth, editACoverLetter);

module.exports = router;
