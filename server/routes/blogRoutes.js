const express = require("express");
const router = express.Router();
const auth = require("../middleware/authentication");

const {
	createPost,
	deleteABlogPost,
	createABlogPostComment,
	createALikeForABlogPost,
	createAReplyToABlogComment,
	searchPost,
	getABlogPost,
	updatePost,
	getAllPosts,
} = require("../controllers/blogController");
const { admin } = require("../middleware/admin");
const upload = require("../utils/multer");
const { uploadImage } = require("../middleware/image");

router.get("/blogs/search", searchPost);
router.get("/blogs/:blogId", getABlogPost);
router.get("/blog/", getAllPosts);

router.post("/admin/blog", uploadImage, createPost);
router.post("/blog/comment", auth, createABlogPostComment);
router.post("/blog/like", auth, createALikeForABlogPost);
router.post("/blog/reply", auth, createAReplyToABlogComment);

router.patch("/blog/:id", admin, updatePost);

router.delete("/admin/blog/:blogId", admin, deleteABlogPost);

module.exports = router;
