const express = require("express");
const router = express.Router();

const {
	createAdmin,
	verifyAdmin,
	deleteAdmin,
    updateAdmin,
    logout,
} = require("../controllers/adminController");
const { leadAdmin, admin } = require("../middleware/admin");

router.post("/admin/signup", createAdmin);
router.post("/admin/verify", verifyAdmin);
router.delete("/admin/delete/:id", leadAdmin, deleteAdmin);
router.put("/admin",admin,updateAdmin)
router.post("/admin/logout",admin,logout)

module.exports = router;
