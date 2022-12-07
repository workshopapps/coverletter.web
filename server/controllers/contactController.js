const ContactUsValidation = require("../utils/contactUs.validation");
const {sendEmail} = require("../utils/sendEmail");
const { BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const contact = async (req, res) => {
	const { userEmail, fullName, phone, subject, description } = req.body;
	const email = "aplicarorg@gmail.com"
	const contactError = ContactUsValidation.ContactValidation(
		fullName,
		userEmail,
		subject,
		phone,
		description
	);
	const body = `
	My name is ${fullName} and I have an issue. ${description}. \n\nYou can contact me on ${phone} or send a mail to ${userEmail}.`
	if (contactError) {
           throw new BadRequestError(contactError);
		return;
	} else 
	{
		try {
		  const result = await sendEmail(email, subject, body);
		  if(result) {
			 return res.status(StatusCodes.CREATED).json({msg: "Email sent successfully", result });
		  }
		  return res.status(500).json({msg: "Email not sent successfully"})
		} catch (error) {
			return res.status(500).json({ msg: error.m})
		}
	

	}
	
};

module.exports = { contact };
