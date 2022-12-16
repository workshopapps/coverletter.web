const express = require("express");
const {
	saveResume,
	getAllresumes,
	getResume,
	delResume,
} = require("../controllers/resume");
const auth = require("../middleware/authentication");

const router = express.Router();

// router.use(auth);

router.route("/").delete(delResume).get(getAllresumes).post(saveResume);
router.route("/:id").get(getResume);

module.exports = router;
