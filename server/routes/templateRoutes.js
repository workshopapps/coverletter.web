const express = require("express");
const router = express.Router();

const {
	getAConvertLetter,
	editACovertLetter,
} = require("../controllers/getEditController");

const auth = require("../middleware/authentication");

// Add your template routes below this

router.get("/template/:id", auth, getAConvertLetter);
router.patch("/template/:id", auth, editACovertLetter);

module.exports = router;
