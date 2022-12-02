const express = require("express");
const auth = require('../middleware/authentication')

const {createPost,getPost} = require('../controllers/postController')
const router = express.Router();

// your routes here
router.post('/createPost', auth, createPost)
router.get('/post/:id', auth, getPost)


module.exports=router