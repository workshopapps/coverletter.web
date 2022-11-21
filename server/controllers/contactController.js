
const ContactValidation = require("../utils/contact");
const sendEmail = require("../utils/sendEmail");
const { BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const contact = async (req, res) => {
	const { email, fullname, phone, subject, description } = req.body;

	const contactError = ContactValidation.contactUs(
		fullname,
		email,
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
