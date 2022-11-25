
const ContactValidation = require("../utils/contact");
const sendEmail = require("../utils/sendEmail");
const { BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const contact = async (req, res) => {
	const { userEmail, fullName, phone, subject, description } = req.body;
    const email = "aplicarorg@gmail.com"
	const contactError = ContactValidation.contactUs(
		fullName,
		userEmail,
		subject,
		phone,
		description
	);

	if (contactError) {
		throw new BadRequestError(contactError);
	} else 
    {
       await sendEmail(email, subject, description).then((result) => {
			if (result) {
				res.status(StatusCodes.CREATED).json(result);
			}
		});
    }

};
module.exports = { contact };
