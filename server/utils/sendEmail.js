const nodemailer = require("nodemailer");
require("dotenv").config();


const sendEmail = async (email, subject, url) => {
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
			from: "Coverly",
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
const mailStyle = (message, otpResetToken) => {
	return `<html>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400&display=swap');
		* {
			font-family: "Manrope";
		}
	</style>
	
	<body style="background-color:#cddcf8;padding:40px 5px">
		<div style="max-width:350px;margin:auto;padding:30px;background-color:#fff;border-radius:10px">
		<img src="https://drive.google.com/uc?export=view&id=1boA_lEheNpOoIYRnblv1c2-osYh4oXsQ" alt="logo" height="50px" style="margin-top:10px;margin-bottom:30px" />
			<p>Hi,</p>
			<p>Thank you for choosing Coverly, ${message}</p>
			<div style="display:flex;justify-content:center;align-items:center"><span style="padding:10px 30px;background-color:#0652DD;color:#fff;border-radius:5px;font-size:24px;font-weight:bold">${otpResetToken}</span></div>
			<p>Regards,</p>
			<p>Coverly</p>
			<hr style="border:none;border-top:1px solid #efefef;margin-top:30px" />
			<p style="color:#999;font-size:12px;margin-top:15px">© 2022 Coverly. All rights reserved.</p>
		</div>
	</body>
	
	</html>`
}

module.exports = {
	sendEmail, mailStyle
}