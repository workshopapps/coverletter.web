const router = require("express").Router();
const { downloadCoverLetter } = require("../controllers/downloadController");

router.post("/download", downloadCoverLetter);

module.exports = router;