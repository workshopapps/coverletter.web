
const ContactValidation = require("../utils/contact");
const sendEmail = require("../utils/sendEmail");
const { BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const contact = async (req, res) => {
	const { Useremail, fullname, phone, subject, description } = req.body;
    const email = "aplicarorg@gmail.com"
	const contactError = ContactValidation.contactUs(
		fullname,
		Useremail,
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
				res.status(StatusCodes.OK).json(`email is sent to  ${email}`);
			}
		});
    }

};
module.exports = { contact };
