const express = require("express");
const auth = require('../middleware/authentication')

const {createPost} = require('../controllers/postController')
const router = express.Router();

// your routes here
router.post('/createPost', auth, createPost)


module.exports=router