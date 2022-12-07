const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
	{
		title: {
			type: String,
		},
		content: {
			type: String,
		},
		viewCounter: {
			type: Number,
			default: 0,
		},
		repliesCounter: {
			type: Number,
			default: 0,
		},
		userId: {
			type: mongoose.Types.ObjectId,
			ref: "User",
			required: [true, "Please provide user"],
		},
		likesCounter: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
