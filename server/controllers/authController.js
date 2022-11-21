const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { generateOTP } = require("../utils/generateOTP");
const { BadRequestError } = require("../errors");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

const register = async (req, res) => {
	const { email, name, password } = req.body;

	const oldUser = await User.findOne({ email });

	if (oldUser) {
		throw new BadRequestError("Email already exists");
	}
	let confirmationCode = generateOTP(4);

	const user = new User({
		name,
		email,
		password,
		confirmationCode,
	});

	await sendEmail(
		req.body.email,
		"Verify email",
		"<h3>OTP for account verification is </h3>" +
			`<h1 style='font-weight:bold;'>" + ${confirmationCode} +"</h1>`
	);

	await user.save();

	res.status(StatusCodes.CREATED).json("Signup was successful.");
};
const verify = async (req, res) => {
	const user = await User.findOne({ confirmationCode: req.body.otp });

	if (user) {
		user.status = "Active";
		user.confirmationCode = "";
		await user.save();
		res.status(StatusCodes.OK).json("User has been successfully verified");
	} else {
		res.status(StatusCodes.BAD_REQUEST).json("Verification failed");
	}
};

const login = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return next(
				new BadRequestError("Please provide a valid email and password")
			);
		}
		const user = await User.findOne({ email });
		if (!user) {
			return next(new BadRequestError("Invalid email or password"));
		}

		if (user && !(await user.comparePassword(password))) {
			return next(new BadRequestError("Invalid email or password"));
		}

		if (user && !(await user.comparePassword(password))) {
			return next(new BadRequestError("Invalid email or password"));
		}
		const token = user.createJWT();

		res.status(201).json({
			status: "success",
			token,
		});
	} catch (error) {
		console.log(error);
	}
};

const updatePassword = async (req, res) => {
	//1) Get User from collection
	const user = await User.findById(req.user.id).select("+password");
	// 2) Get the body entry
	const { oldPassword, password, confirmPassword } = req.body;
	// 3) check if user old password == the password in DB
	if (!(await user.comparePassword(oldPassword, user.password))) {
		throw new BadRequestError("Please Enter Your Correct Old Password");
	}
	// 4) check if user  new password == old password
	if (await user.comparePassword(password, user.password)) {
		throw new BadRequestError(
			"New Password Must be different from old password"
		);
	}
	// 5) check if password & confirmPassword are the same
	if (password != confirmPassword) {
		throw new BadRequestError(
			"Password and confirm Password must be the same."
		);
	}
	//6) Update password
	user.password = password;
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
const resetPassword = async (req, res) => {
	const { password, email, confirmPassword } = req.body;

	if (password !== confirmPassword) {
		throw new BadRequestError("passwords must be similar");
	}

	const user = await User.findOne({ email: email });

	if (!user) {
		throw new BadRequestError("email not found in database");
	}

	const comparePassword = await user.compare(hashedPassword, user.password);
	if (!comparePassword) {
		throw new BadRequestError("Passwords fields can only be unique");
	}

	user.password = password;
	user.passwordResetToken = undefined;
	user.passwordResetExpires = undefined;
	await user.save();

	res.status(StatusCodes.CREATED).json({
		msg: "Password change was successful.",
	});
};

const validateOTP = async (req, res) => {
	const { otp, email } = req.body;
	//console.log(otp);
	const user = await User.findOne({ email });
	if (!user) {
		throw new BadRequestError("email not found in database");
	}

	const verifyOTP = await user.compare(otp, user.otp);
	if (!verifyOTP) {
		throw new BadRequestError("OTP is invalid or expired");
	}

	res.status(StatusCodes.CREATED).json({
		msg: "otp verification was successful.",
	});
};
module.exports = {
	register,
	login,
	forgotPassword,
	updatePassword,
	verify,
	resetPassword,
	validateOTP,
};
