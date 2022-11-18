require("dotenv").config();
const crypto = require("crypto");
const User = require("../models/User");
const { BadRequestError } = require("../errors");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");
const sendOTP = require("../utils/sendOTP");

// @michstery Reset Password Endpoint
exports.resetPassword = async (req, res, next) => {
	// 1) Get  User based on token
	const hashedToken = crypto
		.createHash("sha256")
		.update(req.params.token)
		.digest("hex");

	const user = await User.findOne({ passwordResetToken: hashedToken });
	// 2) If token has not expired and there is user, set the new User
	if (!user) {
		return next(new BadRequestError("Otp Token is invalid or has Expired"));
	}

	user.password = req.body.password;
	user.passwordConfirm = req.body.passwordConfirm;
	user.passwordResetToken = undefined;
	user.passwordResetExpires = undefined;
	await user.save();
};

const validateOTP = async (req, res, next) => {
	const { otp, email } = req.body;
	//console.log(otp);
	const user = await User.findOne({ email });
	if (!user) return next(new BadRequestError(`OTP is invalid or expired`));
	const verifyOTP = await bcrypt.compare(otp, user.otp, (err, isMatch) => {
		if (err) {
			return err;
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
};
