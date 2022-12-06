const express = require("express");
const router = express.Router();

const { createStory } = require("../controllers/customerStoriesController");
const { admin } = require("../middleware/admin");

router.post("/customer-story/", admin, createStory);

module.exports = router;
