const express = require("express");
const router = express.Router();

const {
	createPost,
	deleteABlogPost,
	searchPost,
	getABlogPost,
	updatePost,
} = require("../controllers/blogController");
const auth = require("../middleware/authentication");

router.get("/blogs/search", searchPost);
router.get("/blogs/:blogId", getABlogPost);
router.post("/admin/blog/", createPost);
router.delete("/admin/blog/:blogId", auth, deleteABlogPost);
router.put("/admin/blogd/:id", updatePost);

module.exports = router;
