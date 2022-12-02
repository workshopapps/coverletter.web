const express = require("express");
const router = express.Router();

const {
	createPost,
	deleteABlogPost,
	searchPost,
} = require("../controllers/blogController");
const auth = require("../middleware/authentication");

router.get("/blogs/search", searchPost);
router.post("/admin/blog/",auth, createPost);
router.delete("/admin/blog/:blogId", auth, deleteABlogPost);

module.exports = router;

