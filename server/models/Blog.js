const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
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
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("Blog", BlogSchema);
