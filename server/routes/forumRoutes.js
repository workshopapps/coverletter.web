const express = require("express");
const auth = require("../middleware/authentication");

const { createForumPost } = require("../controllers/forumController");
const { getAllForumPosts } = require("../controllers/forumController");
const router = express.Router();

// your routes here
router.post("/createPost", auth, createForumPost);
router.get("/getAllPost", getAllForumPosts);

module.exports = router;
