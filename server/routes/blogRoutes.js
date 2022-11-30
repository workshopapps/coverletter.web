const express = require("express");
const router = express.Router();

const { createPost } = require("../controllers/blogController");

router.post("/admin/blog/create", createPost);

module.exports = router;
