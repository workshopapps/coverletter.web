const User = require("../models/User");
const { BadRequestError } = require("../errors");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");

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
	validateOTP,
	resetPassword,
};
