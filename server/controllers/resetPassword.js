const User = require("../models/User");
const { BadRequestError } = require("../errors");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");

const resetPassword = async (req, res, next) => {
	const { password, email, confirmPassword } = req.body;

	if (password !== confirmPassword) {
		const err = new Error("passwords must be similar");
		err.statusCode = 404;
		throw err;
	}

	const user = await User.findOne({ email: email });

	if (!user) {
		const err = new Error("passwords must be similar");
		err.statusCode = 404;
		throw err;
	}

	const hashedPassword = bcrypt.hash(password, 10);

	const comparePassword = await bcrypt.compare(
		hashedPassword,
		user.password,
		(err, isMatch) => {
			if (err) {
				//err.statusCode = 404;
				throw err;
			}
		}
	);

	user.password = hashedPassword;
	user.passwordResetToken = undefined;
	user.passwordResetExpires = undefined;
	await user.save();

	res.status(StatusCodes.OK).json({
		msg: "Password change was successful.",
	});
};

const validateOTP = async (req, res, next) => {
	const { otp, email } = req.body;
	//console.log(otp);
	const user = await User.findOne({ email });
	if (!user) {
		const err = new Error("email not found in database");
		err.statusCode = 404;
		throw err;
	}

	const verifyOTP = await bcrypt.compare(otp, user.otp, (err, isMatch) => {
		if (err) {
			const error = new Error("OTP is invalid or expired");
			error.statusCode = 404;
			throw error;
		}
		console.log(isMatch);
		//return isMatch;
	});

	res.status(StatusCodes.OK).json({
		msg: "otp verification was successful.",
	});
};

module.exports = {
	validateOTP,
	resetPassword,
};
