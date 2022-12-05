const { generator } = require("../utils/gpt3.generate");
const { StatusCodes } = require("http-status-codes");
const CoverLetter = require("../models/coverletter");

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
	return res.status(StatusCodes.CREATED).json(response);
};

const getACoverLetter = async (req, res) => {
	const { userId } = req.user;
	const { id: coverLetterId } = req.params;

	if (!mongoose.Types.ObjectId.isValid(coverLetterId)) {
		throw new BadRequestError(`Cover Letter Blog ID request.`);
	}

	const coverLetter = await CoverLetter.findOne({
		_id: coverLetterId,
		user_id: userId,
	});

	if (!coverLetter) {
		throw new BadRequestError(
			`Cover Letter with id ${coverLetterId} does not exist.`
		);
	}

	return res.status(StatusCodes.OK).json({
		message: "Cover Letter request was successfully.",
		data: coverLetter,
	});
};

module.exports = { sendCoverLetter, getACoverLetter };
