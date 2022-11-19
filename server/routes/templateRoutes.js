const express = require("express");
const router = express.Router();

const {
	editACovertLetter,
	getAllConvertLettersByAUser,

} = require("../controllers/templateController");

const auth = require("../middleware/authentication");

// Add your template routes below this

router.get("/template", auth, getAllConvertLettersByAUser);
router.patch("/template/:id", auth, editACovertLetter);

module.exports = router;
