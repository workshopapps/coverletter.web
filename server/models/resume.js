const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Types.ObjectId,
		ref: "User",
		required: [true, "Please provide user"],
	},
	content: String, //Make Unique? I do not know how efficient our pdf parser is.
	label: String, //Was thinking of making this unique - Label here refers to the filename (Will not make unique because it is entirely possible for twi different resumes to be named the same way)
});

module.exports = mongoose.model("resume", resumeSchema);
