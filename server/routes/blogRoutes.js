const express = require("express");
const router = express.Router();

const {
	createPost,
	deleteABlogPost,
	searchPost,
	getABlogPost,
	updatePost,
	getAllPosts,
	getOnePost,
} = require("../controllers/blogController");
const auth = require("../middleware/authentication");

router.get("/blogs/search", searchPost);
router.get("/blogs/:blogId", getABlogPost);
router.get("/blog/", getAllPosts);
router.post("/admin/blog/", auth, createPost);
router.delete("/admin/blog/:blogId", auth, deleteABlogPost);
router.patch("/blog/:id", auth, updatePost);

module.exports = router;
