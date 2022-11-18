const express = require("express");
const router = express.Router();
const { register } = require("../controllers/auth");

//Add your routes here
router.post("/signup", register);

module.exports = router;
