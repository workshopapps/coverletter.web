const ContactUsValidation = require("../utils/contactUs.validation");
const sendEmail = require("../utils/sendEmail");
const { BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const contact = async (req, res) => {
	const { userEmail, fullName, phone, subject, description } = req.body;
	const email = "aplicarorg@gmail.com";
	const contactError = ContactUsValidation.ContactValidation(
		fullName,
		userEmail,
		subject,
		phone,
		description
	);

	if (contactError) {
           throw new BadRequestError(contactError);
		return;
	} else 
	{
		return await sendEmail(email, subject, description).then((result) => {
			if (result) return res.status(StatusCodes.CREATED).json(result);
		});
	}
	
};

module.exports = { contact };
