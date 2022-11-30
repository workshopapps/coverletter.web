const express = require("express");
const router = express.Router();

const { createAdmin, verifyAdmin } = require("../controllers/adminController")

router.post("/admin/signup", createAdmin);
router.post("/admin/verify", verifyAdmin);

module.exports = router;
