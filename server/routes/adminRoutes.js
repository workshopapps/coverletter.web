const express = require("express");
const router = express.Router();

const {
	createAdmin,
	verifyAdmin,
	deleteAdmin,
} = require("../controllers/adminController");
const { leadAdmin } = require("../middleware/admin");

router.post("/admin/signup", leadAdmin, createAdmin);
router.post("/admin/verify", verifyAdmin);
router.delete("/admin/delete/:id", leadAdmin, deleteAdmin);

module.exports = router;
