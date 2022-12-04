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
	getAllPosts,
} = require("../controllers/blogController");
const { admin } = require("../middleware/admin");

router.get("/blogs/search", searchPost);
router.get("/blogs/:blogId", getABlogPost);
router.get("/blog/", getAllPosts);

router.post("/admin/blog/", admin, createPost);
router.post("/blog",auth, createABlogPostComment);
router.post("/blog", auth, createALikeForABlogPost);
router.post("/blog/comment", auth, createAReplyToABlogComment);

router.patch("/blog/:id", updatePost);
router.patch("/blog/:id", admin, updatePost);

router.delete("/admin/blog/:blogId", admin, deleteABlogPost);


module.exports = router;
