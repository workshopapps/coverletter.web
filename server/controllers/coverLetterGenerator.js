const { generator } = require("../utils/gpt3.generate");
const { StatusCodes } = require("http-status-codes");

const sendCoverLetter = async (req, res) => {
	const {
		company_name,
		company_address,
		city,
		country,
		role,
		years_of_exp,
		date,
		recipient_name,
		recipient_department,
		recipient_email,
		recipient_phone_no,
	} = req.body;
	const file = req.files.myFile;
	console.log(file);
	const coverLetter = await generator(
		file,
		company_name,
		role,
		recipient_name,
		recipient_department
	);
	const response = {
		status: "success",
		data: {
			cover_letter: coverLetter,
			company_name: company_name,
			company_address: company_address,
			city: city,
			country: country,
			years_of_exp: years_of_exp,
			date: date,
			recipient_name: recipient_name,
			recipient_department: recipient_department,
			recipient_email: recipient_email,
			recipient_phone_no: recipient_phone_no,
		},
	};
	res.status(StatusCodes.CREATED).json(response);
};

module.exports = { sendCoverLetter };
