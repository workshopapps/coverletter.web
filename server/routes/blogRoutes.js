const express = require("express");
const router = express.Router();
const {
	createPost,
	getAllPosts,
	getOnePost,
	createABlogPostComment,
	createAReplyToABlogComment,
	createALikeForABlogPost,
} = require("../controllers/blogController");
const auth = require("../middleware/authentication");

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
router.get("/blog/", getAllPosts);

router.post("/admin/blog/", createPost);
router.post("/blogs", createABlogPostComment);
router.post("/blogs", createALikeForABlogPost);
router.post("/blogs/comment", createAReplyToABlogComment);

router.delete("/admin/blog/:blogId", auth, deleteABlogPost);

router.patch("/blog/:id", updatePost);

module.exports = router;
