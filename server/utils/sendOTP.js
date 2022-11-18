const nodemailer = require("nodemailer");

module.exports = async (email, otp) => {
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
			subject: "Your OTP is ",
			text: otp,
		});
		console.log("OTP sent successfully");
	} catch (error) {
		console.log("OTP not sent!");

		return error;
	}
};
