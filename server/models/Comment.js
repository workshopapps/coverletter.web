const { model, Schema } = require("mongoose");

const commentSchema = new Schema(
	{
		postId: { type: String, required: true },
		content: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = new model("Comment", commentSchema);
