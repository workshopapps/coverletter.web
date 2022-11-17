const express = require("express");
const router = express.Router();

const { forgotPassword } = require("../controllers/resetPassword");


// forgot password route here
router.post("/forgot", forgotPassword);

module.exports = router;
