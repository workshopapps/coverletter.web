const router = require("express").Router();
const { downloadCoverLetter,download } = require("../controllers/downloadController");

router.post("/download", downloadCoverLetter);
router.get("/download", download);

module.exports = router;