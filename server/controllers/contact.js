const sendEmail = require("../utils/sendEmail");
const emailToSendContactTo = "aplicarorg@gmail.com";

const contact = async (req, res) => {
	try {
		const { email, name, phone, subject, description } = req.body;

		console.log({
			isExisting: [email, name, phone, subject, description].every(
				Boolean
			),
			email,
			name,
			phone,
			subject,
			description,
			body: req?.body,
		});

		if (![email, name, phone, subject, description].every(Boolean)) {
			return res.status(400).json({
				message: "One or more required fields are missing.",
			});
		}

		// validate email
		const emailRegEx =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!email.match(emailRegEx)) {
			return res.status(400).json({
				message: "Email format is invalid",
			});
		}

		// sending email;
		// try {
		// please specify if description maps to url
		await sendEmail(emailToSendContactTo, subject, description).then(() => {
			return res.status(200).json({
				message:
					"Contact successfully sent, we'd get back to you within the hour!",
			});
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
