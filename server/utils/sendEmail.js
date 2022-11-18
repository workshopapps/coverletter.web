const nodemailer = require("nodemailer");

module.exports = async (email, subject, otp) => {
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
            tls : { rejectUnauthorized: false }
		});

		await transporter.sendMail({
			from: "Aplicar",
			to: email,
			subject: subject,
			html: "<h3>OTP for account verification is </h3>"  + "<h1 style='font-weight:bold;'>" + otp +"</h1>"
            
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		
		return error;
	}
};