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
	const body = `${description}
	My name is ${fullName} and you can contact me on ${phone} or send a mail to ${userEmail}.`
	if (contactError) {
           throw new BadRequestError(contactError);
		return;
	} else 
	{
		try {
			return await sendEmail(email, subject, body).then((result) => {
				if (result) return res.status(StatusCodes.CREATED).json(result);
			});
		} catch (error) {
			return res.status(500).json({ msg: error.message})
		}
	
	}
	
};

module.exports = { contact };
