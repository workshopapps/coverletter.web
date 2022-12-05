const mongoose = require("mongoose");

const CoverLetterSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Types.ObjectId,
		ref: "User",
		required: [true, "Please provide user"],
	},
	cover_letter: String,
	company_name: String,
	company_address: String,
	city: String,
	role: String,
	country: String,
	years_of_exp: String,
	date: String,
	recipient_name: String,
	recipient_department: String,
	recipient_email: String,
	recipient_phone_no: String,
});

module.exports = mongoose.model("CoverLetter", CoverLetterSchema);
