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
		userId: {
			type: mongoose.Types.ObjectId,
			ref: "User",
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
				userId: String,
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
			default: "",
		},
		imageCloudinaryId: {
			type: String,
			required: false,
			maxlength: 255,
			default: "",
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
