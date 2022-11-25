const express = require("express");
const router = express.Router();

const {
	editACovertLetter,
	getAllConvertLettersByAUser,
	deleteCoverLetter,
} = require("../controllers/templateController");

const auth = require("../middleware/authentication");

// Add your template routes below this

router.get("/template", auth, getAllConvertLettersByAUser);
router.delete("/template", auth, deleteCoverLetter);
router.patch("/template/:id", auth, editACovertLetter);

module.exports = router;
