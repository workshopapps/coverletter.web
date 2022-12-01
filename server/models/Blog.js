const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BlogSchema = new Schema(
	{
		adminId: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		likes: {
			type: String,
			default: 0,
		},
		createdAt: {
			type: Date,
			required: true,
			default: Date.now,
		},
	},
	{
		timestamps: true,
	}
);
module.exports = mongoose.model("Blog", BlogSchema);
