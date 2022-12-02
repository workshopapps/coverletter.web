const express = require("express");
const router = express.Router();

const { createPost, searchPost } = require("../controllers/blogController");
const auth = require("../middleware/authentication");

router.get("/blogs/search", searchPost);
router.post("/admin/blog/", createPost);

module.exports = router;
