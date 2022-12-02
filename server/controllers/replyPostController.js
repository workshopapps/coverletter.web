const Admin = require("../models/Admin");
const Blog = require("../models/Blog");
const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const replyPost = async (req, res) => {
    const reply = await findOne(req.params.postId, {
        $push: [
          { 
              "replies" : req.body
          }
        ]
    },{ new : true}) 

    if(!reply) 
    {
        res.json("Reply wasn't successfull")
    } else 
    {
        res.json(reply)
    }
   
}
const getAllreplies = async (req, res) => {
    const getReply = await post.find()
    const replyPost = getReply.replies
    if(replyPost) 
    {
        res.json(replyPost)
    } else 
    {
        res.json("No reply found")
    }
} 

module.exports = {
    replyPost,
    getAllreplies
}
