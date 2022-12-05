const mongoose = require("mongoose");

const ViewsSchema = mongoose.Schema({
	userId: {
		type: mongoose.Types.ObjectId,
		ref: "User",
		required: [true, "Please provide user"],
	},
	postId: {
		type: String,
	},
});

module.exports = mongoose.model("Views", ViewsSchema);
