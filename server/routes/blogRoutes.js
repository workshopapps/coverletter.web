const express = require("express");
const router = express.Router();

const { createPost } = require("../controllers/blogController");
const auth = require("../middleware/authentication");

router.post("/admin/blog/create", auth, createPost);

module.exports = router;
