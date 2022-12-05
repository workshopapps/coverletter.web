const { model, Schema, Types } = require("mongoose");

const replySchema = new Schema(
	{
		commentId: {
			type: Types.ObjectId,
			ref: "Comment",
			required: [true, "Please provide a Comment Id"],
		},
		userId: {
			type: Types.ObjectId,
			ref: "User",
			required: [true, "Please provide user"],
		},
		content: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = new model("ReplyToBlog", replySchema);
