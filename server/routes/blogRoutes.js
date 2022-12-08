const express = require("express");
const router = express.Router();

const {
	deleteABlogPost,
	createABlogPostComment,
	createALikeForABlogPost,
	createAReplyToABlogComment,
	searchPost,
	getABlogPost,
	updatePost,
	createPost,
	getAllPosts,
	getOnePost,
} = require("../controllers/blogController");
const { admin } = require("../middleware/admin");
// const {upload} = require("../utils/multer");
const { uploadImage } = require("../middleware/image");

router.get("/blogs/search", searchPost);
router.get("/blogs/:blogId", getABlogPost);
router.get("/blog/", getAllPosts);
router.post("/admin/blog/", createPost);
router.delete("/admin/blog/:blogId", auth, deleteABlogPost);
router.put("/admin/blogd/:id", updatePost);

module.exports = router;
