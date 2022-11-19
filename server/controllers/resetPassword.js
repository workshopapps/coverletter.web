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

	const hashedPassword = bcrypt.hash(password, 10);

	const comparePassword = await bcrypt.compare(
		hashedPassword,
		user.password,
		(err, isMatch) => {
			if (isMatch) {
				//err.statusCode = 404;
				throw new BadRequestError("Use a new password");
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

const validateOTP = async (req, res) => {
	const { otp, email } = req.body;
	//console.log(otp);
	const user = await User.findOne({ email });
	if (!user) {
		throw new BadRequestError("email not found in database");
	}

	const verifyOTP = await bcrypt.compare(otp, user.otp, (err, isMatch) => {
		if (err) {
			throw new BadRequestError("OTP is invalid or expired");
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
