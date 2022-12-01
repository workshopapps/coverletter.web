const express = require("express");
const router = express.Router();

const { createPost, getAllPosts, getOnePost } = require("../controllers/blogController");
const auth = require("../middleware/authentication");

router.post("/admin/blog/", auth, createPost);
router.get("/blog/", getAllPosts)
router.get("/blog/:blogId", getOnePost)

module.exports = router;
