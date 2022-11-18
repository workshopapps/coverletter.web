const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { randomString } = require("../utils/randomString");
const { BadRequestError } = require("../errors");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

const register = async (req, res) => {
	const { email, name, password } = req.body;

	const oldUser = await User.findOne({ email });

	if (oldUser) {
		throw new BadRequestError("Email already exists");
	}
	let confirmationCode = randomString(6);
	console.log(confirmationCode);
	const user = new User({
		name,
		email,
		password,
		confirmationCode,
	});
	const url = `${process.env.BASE_URL}/auth/verify/${confirmationCode}`;
	const message1 = `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
    <div style="margin:50px auto;width:70%;padding:20px 0">
      <div style="border-bottom:1px solid #eee">
        <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Aplicar</a>
      </div>
      <p style="font-size:1.1em">Hi,</p>
      <p>Thank you for choosing Aplicar. Please click the link below </p>
      <a href="${url}" style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">Here to Continue </a>
      <p style="font-size:0.9em;">Regards,<br />Your Brand</p>
      <hr style="border:none;border-top:1px solid #eee" />
      <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
        <p>Aplicar</p>
        <p>1600 Amphitheatre Parkway</p>
        <p>California</p>
      </div>
    </div>
  </div>`;
	await sendEmail(req.body.email, "Verify email", message1);

	const savedUser = await user.save();
	const token = savedUser.createJWT();

	res.status(StatusCodes.CREATED).json({ user: token });
};

const forgotPassword = async (req, res, next) => {
	const user = await User.findOne({ email: req.body.email });
	if (!user) {
		return next(
			new BadRequestError("There is no user with this email address.")
		);
	}
	const otpResetToken = user.createPasswordResetToken();
	await user.save();

	const message = `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
    <div style="margin:50px auto;width:70%;padding:20px 0">
      <div style="border-bottom:1px solid #eee">
        <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Aplicar</a>
      </div>
      <p style="font-size:1.1em">Hi,</p>
      <p>Thank you for choosing Aplicar. Use the following OTP to complete your password reset procedures. OTP is valid for 5 minutes</p>
      <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otpResetToken}</h2>
      <p style="font-size:0.9em;">Regards,<br />Your Brand</p>
      <hr style="border:none;border-top:1px solid #eee" />
      <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
        <p>Aplicar</p>
        <p>1600 Amphitheatre Parkway</p>
        <p>California</p>
      </div>
    </div>
  </div>`;

	try {
		await sendEmail(user.email, "Password Reset", message);
		res.status(200).json({
			status: "success",
			message: "Email Sent Successfully",
		});
	} catch (err) {
		return next(new BadRequestError("Error Sending Email"));
	}
};

module.exports = {
	register,
	forgotPassword,
};
