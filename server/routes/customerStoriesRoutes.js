const express = require("express");
const router = express.Router();

const { createStory } = require("../controllers/customerStoriesController");
const auth = require("../middleware/authentication");

router.post("/customer-story/", auth, createStory);

module.exports = router;
