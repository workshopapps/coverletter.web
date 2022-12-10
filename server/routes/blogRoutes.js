const express = require("express");
const router = express.Router();
const auth = require("../middleware/authentication");

const {
	createPostImage,
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
// const {upload} = require("../utils/multer");
const { uploadImage } = require("../middleware/image");

router.get("/blogs/search", searchPost);
router.get("/blogs/:blogId", getABlogPost);
router.get("/blog/", getAllPosts);

router.post("/admin/blog/image", admin, uploadImage, createPostImage);
router.post("/admin/blog", admin, createPost);
router.post("/blog/:id/comment", auth, createABlogPostComment);
router.post("/blog/:id/like", auth, createALikeForABlogPost);
router.post("/blog/comment/:id/reply", auth, createAReplyToABlogComment);

router.patch("/blog/:id", admin, updatePost);

router.delete("/admin/blog/:id", admin, deleteABlogPost);

module.exports = router;
