const express = require("express");
const router = express.Router();

const {
	createPost,
	deleteABlogPost,
} = require("../controllers/blogController");
const auth = require("../middleware/authentication");

router.post("/admin/blog/", auth, createPost);
router.delete("/blog/:blogId", auth, deleteABlogPost);

module.exports = router;
