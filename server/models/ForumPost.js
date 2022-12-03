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
		likes: [
			{
				userId: String,
				createdAt: String,
			},
		],
		userId: {
			type: mongoose.Types.ObjectId,
			ref: "User",
			required: [true, "Please provide user"],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
