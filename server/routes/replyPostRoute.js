const express = require("express");
const router = express.Router();

const replyBlog = require("../controllers/blogReplyController");
const auth = require("../middleware/authentication");

router.post("/user/post/:postId", auth, replyBlog.replyPost);
router.get ("/user/reply/:postId", replyBlog.getAllreplies)


module.exports = router;
