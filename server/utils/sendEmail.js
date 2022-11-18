const nodemailer = require("nodemailer");

module.exports = async (email, subject, url) => {
	console.log({ email, subject, url });

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

		console.log("Transporter initialization succeeded");

		await transporter
			.sendMail({
				from: "Aplicar",
				to: email,
				subject: subject,
				text: url,
			})
			.then((res) => {
				console.log("response", res);
			})
			.catch((err) => {
				console.log({ err });
			});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");

		return error;
	}
};
