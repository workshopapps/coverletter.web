const sendEmail = require("../utils/sendEmail");

const ContactUs = async (req, res) => {
	try {
		const { email, fullname, subject, phone, description } = req.body;
		var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
		if ((!fullname || !email || !subject, !phone, !description))
			return res.status(400).json({
				message: "All input are required",
			});
		if (!email.match(emailFormat))
			return res.status(400).json({
				message: "Invaild email input",
			});
		if (!typeof phone === "number" || typeof phone === "string")
			return res.status(400).json({
				message: "Invaild phone-number input",
			});
		await sendEmail(email, subject).then((result) => {
			if (!result)
				return res
					.status(401)
					.json({ message: "Request was not successfull" });
			res.status(401).json({ message: "Request was successfull" });
		});
	} catch (error) {}
};

module.exports = { ContactUs };
