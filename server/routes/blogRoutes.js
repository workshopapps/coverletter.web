const express = require("express");
const router = express.Router();

const { createPost, searchPost } = require("../controllers/blogController");
const auth = require("../middleware/authentication");

router.get("/bloggs", searchPost);
router.post("/admin/blog/", auth, createPost);

module.exports = router;
