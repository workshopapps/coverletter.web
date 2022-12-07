const mongoose = require("mongoose");

const LikesToForumPostSchema = mongoose.Schema({
	userId: {
		type: mongoose.Types.ObjectId,
		ref: "User",
		required: [true, "Please provide user"],
	},
	postId: {
		type: String,
	},
    likes:{
        type: Boolean, 
        default: true, 
    }
});

module.exports = mongoose.model("LikesToForumPost",LikesToForumPostSchema);
