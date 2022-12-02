const express = require("express");
const auth = require("../middleware/authentication");

const { createForumPost, getAllForumPosts, replyForumPost } = require("../controllers/forumController");
const {  } = require("../controllers/forumController");
const router = express.Router();

// your routes here
router.post("/createPost", auth, createForumPost);
router.get("/getAllPost", getAllForumPosts);
router.post("/:pid/reply", auth, replyForumPost);

module.exports = router;
