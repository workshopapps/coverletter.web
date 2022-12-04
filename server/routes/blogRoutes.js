const express = require("express");
const router = express.Router();

const {
	createPost,
	deleteABlogPost,
	searchPost,
	getABlogPost,
	updatePost,
	getAllPosts,
} = require("../controllers/blogController");
const { admin } = require("../middleware/admin");

router.get("/blogs/search", searchPost);
router.get("/blogs/:blogId", getABlogPost);
router.get("/blog/", getAllPosts);
router.post("/admin/blog/", admin, createPost);
router.delete("/admin/blog/:blogId", admin, deleteABlogPost);
router.patch("/blog/:id", admin, updatePost);

module.exports = router;
