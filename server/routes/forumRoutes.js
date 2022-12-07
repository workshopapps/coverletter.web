const express = require("express");
const auth = require("../middleware/authentication");

const { replyForumPost } = require("../controllers/forumController");
const { createForumPost } = require("../controllers/forumController");
const { getAllForumPosts } = require("../controllers/forumController");
const { getOneForumPost } = require("../controllers/forumController");
const { getAllRepliesToAForumPost } = require("../controllers/forumController");
const { getAReplyFromAForumPost } = require("../controllers/forumController");
const { likePost } = require("../controllers/forumController");
const { deleteForumPost } = require("../controllers/forumController");
const { updateForumPost } = require("../controllers/forumController");

const router = express.Router();

// your routes here
router.post("/createPost", auth, createForumPost);
router.get("/getAllPost", getAllForumPosts);
router.get("/getOnePost/:id", auth, getOneForumPost);
router.delete("/post/:id", auth, deleteForumPost);
router.post("/:pid/reply", auth, replyForumPost);
router.get("/:pid/replies", getAllRepliesToAForumPost);
router.get("/reply/:id", getAReplyFromAForumPost);
router.post("/:pid/like", auth, likePost);
router.patch("/update/:id", auth, updateForumPost);

module.exports = router;
