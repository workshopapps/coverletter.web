const express = require("express");
const {
	saveResume,
	getAllresumes,
	getResume,
	delResume,
} = require("../controllers/resume");
const auth = require("../middleware/authentication");

const router = express.Router();

router.use(auth);

router.route("/").get(getAllresumes).post(saveResume);
router.route("/:id").get(getResume).delete(delResume);

module.exports = router;
