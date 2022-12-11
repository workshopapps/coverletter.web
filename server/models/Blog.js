const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BlogSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		adminId: {
			type: mongoose.Types.ObjectId,
			ref: "Admin",
			required: [true, "Please provide user"],
		},
		comments: [
			{
				type: mongoose.Types.ObjectId,
				ref: "Comment",
			},
		],
		likes: [
			{
				type: mongoose.Types.ObjectId,
				ref: "User",
			},
		],
		createdAt: {
			type: Date,
			required: true,
			default: Date.now,
		},
		imageUrl: {
			type: String,
			required: false,
			maxlength: 255,
			default: null,
		},
		imageCloudinaryId: {
			type: String,
			required: false,
			maxlength: 255,
			default: null,
		},
		replies: [
			{
				text: String,
				user_id: String,
				replyId: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "user",
				},
			},
		],
	},

	{
		timestamps: true,
	}
);
module.exports = mongoose.model("Blog", BlogSchema);
