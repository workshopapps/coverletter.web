const mongoose = require("mongoose");

const replySchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Types.ObjectId,
			ref: "User",
			required: [true, "Pleasae provide user"],
		},
		postId: { type: String, required: true },
		content: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("ReplyToForum", replySchema);
