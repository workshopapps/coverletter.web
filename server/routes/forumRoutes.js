const express = require("express");
const auth = require("../middleware/authentication");

const { replyForumPost } = require("../controllers/forumController");
const { createForumPost } = require("../controllers/forumController");
const { getAllForumPosts } = require("../controllers/forumController");
const { getOneForumPost } = require("../controllers/forumController");
const router = express.Router();

// your routes here
router.post("/createPost", auth, createForumPost);
router.get("/getAllPost", getAllForumPosts);
router.get("/getOnePost/:id", getOneForumPost);
router.post("/:pid/reply", auth, replyForumPost);

module.exports = router;
