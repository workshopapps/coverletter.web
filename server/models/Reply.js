const { model, Schema } = require("mongoose");

const replySchema = new Schema(
	{
		postId: { type: String, required: true },
		content: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = new model("Reply", replySchema);
