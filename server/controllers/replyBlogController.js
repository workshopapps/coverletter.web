const Blog = require("../models/Blog");
const User = require("../models/User");
const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");


const replyPost = async (req, res) => {
	try {
        const userId = req.params.userId
        const postId = req.params.postId
        const user = await User.findByIdAndUpdate({_id : userId})
        
        if(user) 
        {
           const reply = await Blog.findOne(
	        {_id : postId},
			{
				$push: [
					{
						replies: req.body,
					},
				],
			},
			{ new: true }
		);

		if (!reply) {
			throw new BadRequestError(
				res.json({ message: "Your request wasn't successfull" })
			);
		} else {
			return res.status(StatusCodes.OK).json({ reply });
		}
        }
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
                
		
};

const getAllreplies = async (req, res) => {
	try {
        const id =  req.params.postId
        const postId =  mongoose.Types.ObjectId.isValid(id)
		const getReply = await Blog.findById({_id : postId});
		if (!getReply) {
            throw new NotFoundError(
				res.json({
					message: "Sorry we can't find any replies for this post",
				})
			);
			
		} else {
			return res.status(200).json({getReply});
		}
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

module.exports = {
	replyPost,
	getAllreplies,
};
