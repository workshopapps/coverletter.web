const express = require("express");
const router = express.Router();

const { createAdmin, verifyAdmin,deleteAdmin } = require("../controllers/adminController")
const { protect }= require("../controllers/authController")

router.post("/admin/signup", createAdmin);
router.post("/admin/verify", verifyAdmin);

// All After login routes goes below PROTECT ROUTE
router.use(protect)
router.delete("/admin/delete/:id",deleteAdmin)

module.exports = router;
