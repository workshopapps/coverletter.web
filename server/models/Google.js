const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const GoogleSchema = new Schema({
	googleId: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("Google", GoogleSchema);
