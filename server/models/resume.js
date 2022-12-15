const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Types.ObjectId,
		ref: "User",
		required: [true, "Please provide user"],
	},
	content: String,
    label: String
});

module.exports = mongoose.model("resume", resumeSchema);
