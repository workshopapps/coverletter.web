const nodemailer = require("nodemailer");
const path = require("path")
module.exports = async (email, subject, file) => {
	try {
		const fileFormat = path.extname(file.name)
		console.log(file)
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
			html: `
				<div style="margin: 10px auto; text-align: center; background-color: #0652DD; padding: 10px; max-width: 640px; font-family: Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif;">
					<div style="text-align: left;">
						<img src="cid:uniq-mailtrap.png" alt="mailtrap" />
						<p style="font-size: 12px; ">Hi there 👋🏿</p>
						<p style="font-size: 12px; ">Thanks for using Aplicar. Here is your attached cover letter in ${fileFormat} that you requested from us </p>
						<p style="font-size: 12px; line-height: 20px;">Aplicar is an outstanding and efficient website that helps job seekers to generate cover letters for any position. Applying for different jobs with different cover letters can be tasking, which is why we are here to help job seekers generate outstanding Cover letters for any position.</p>
					</div>
					<div style="margin: 20px auto;">
						<a href="http://aplicar.hng.tech/" style="cursor: pointer;" target="_blank" rel="noreferrer noopener">>
							<button style="width: 118px; height: 40px; border: none; background-color: #0652DD; border-radius: 4px; color: white; cursor: pointer;">Tell your friends about us</button>
						</a>
					</div>
				</div>
				`,
			attachments: [
				{
					filename: file.name,
					content: file.data,
					
				}
			],
		});
		return {
			status: 200,
			message: "PDF Has been successfully sent to your email address 🎉",
		};
	} catch (error) {
		console.log(error)
		return {
			status: 500,
			error: "Something went wrong. Please try again",
		};
	}
};
