const express = require("express");
const router = express.Router();

const replyPost = require("../controllers/replyBlogController");
const auth = require("../middleware/authentication");

router.post("/user/post/:postId", auth, replyPost.replyPost);
router.get("/user/post/:postId",  replyPost.getAllreplies);


module.exports = router;
