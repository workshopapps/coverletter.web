const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports = async (email, subject, url) => {
	try {
		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			service: "Gmail",
			port: process.env.SMTP_PORT,
			secure: true,
			auth: {
				user: process.env.EMAIL,
				pass: process.env.PASS,
			},
			tls: { rejectUnauthorized: false },
		});

		await transporter.sendMail({
			from: "Aplicar",
			to: email,
			subject: subject,
			html: url,
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");

		return error;
	}
};
