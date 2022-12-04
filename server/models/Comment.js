const { model, Schema } = require("mongoose");

const commentsSchema = new Schema(
	{
		blogId: {
			type: mongoose.Types.ObjectId,
			ref: "Blog",
			required: [true, "Please provide a Blog Id"],
		},
		userId: {
			type: mongoose.Types.ObjectId,
			ref: "User",
			required: [true, "Please provide user"],
		},
		replies: [
			{
				type: mongoose.Types.ObjectId,
				ref: "Reply",
			},
		],
		content: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = new model("Comment", commentsSchema);
