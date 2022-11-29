const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports = async (email, subject, url) => {
	try {
		let result;
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			service: "Gmail",
			port: 587,
			secure: true,
			auth: {
				user: process.env.EMAIL,
				pass: process.env.PASS,
			},
			tls: { rejectUnauthorized: false },
		});

		
		result = await transporter.sendMail({
			from: "Aplicar",
			to: email,
			subject: subject,
			html: url,
		});
		console.log("email sent successfully");
		return result;
	} catch (error) {
		console.log("email not sent!");

		return error;
	}
};

