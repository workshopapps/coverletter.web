const express = require("express");
const router = express.Router();

const replyRoutes = require("../controllers/replyPostController");
const auth = require("../middleware/authentication");

router.post("/user/reply/:postId",  replyRoutes.replyPost);
router.get("/user/reply/:postId",    replyRoutes.getAllreplies);


module.exports = router;
