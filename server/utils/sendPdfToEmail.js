const nodemailer = require("nodemailer");

module.exports = async (email, subject, fileName) => {
	const fileFormat = fileName.split(".")[1].toUpperCase();
	try {
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

		await transporter.sendMail({
			from: "Aplicar",
			to: email,
			subject: subject,
			text: `Hi there 👋🏿. Thanks for using Aplicar. Here is your attached cover letter in ${fileFormat} that you requested from us`,
			attachments: [
				{
					path: `${__dirname} + "/${fileName}`,
				},
			],
		});
		console.log("PDF Has been successfully sent to your email address 🎉");
	} catch (error) {
		console.log("Something went wrong. Please try again");

		return error;
	}
};
