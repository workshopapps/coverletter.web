const sendEmail = require("../utils/sendEmail");
const { BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");


const contact = async (req, res) => {
	try {
		const { email, name, phone, subject, description } = req.body;

		// sending email;
		// try {
		// please specify if description maps to url
		
		await sendEmail(email, subject, description).then(( result ) => {
			if (!result){
				throw new BadRequestError("One or more field doesn't exist");
			}
			else{
				res.status(StatusCodes.CREATED).json(result);
			}
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		});
	}
};

module.exports = {
	contact,
};
