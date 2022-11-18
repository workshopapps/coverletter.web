const User = require("../models/User");
const { BadRequestError } = require("../errors");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");

const resetPassword = async (req, res, next) => {
	const { password, email, confirmPassword } = req.body;

	if (password !== confirmPassword) {
		return next(new BadRequestError("password fields should be similar"));
	}

	const user = await User.findOne({ email: email });

	if (!user) {
		return next(new BadRequestError("User does not exists"));
	}

	const hashedPassword = bcrypt.hash(password, 10);

	const comparePassword = await bcrypt.compare(
		hashedPassword,
		user.password,
		(err, isMatch) => {
			if (err) {
				return next(
					new BadRequestError(err, `OTP is invalid or expired`)
				);
			}
		}
	);

	user.password = hashedPassword;
	await user.save();

	res.status(StatusCodes.OK).json({
		msg: "Password change was successful.",
	});
};

const validateOTP = async (req, res, next) => {
	const { otp, email } = req.body;
	//console.log(otp);
	const user = await User.findOne({ email });
	if (!user) return next(new BadRequestError(`User not found`));

	const verifyOTP = await bcrypt.compare(otp, user.otp, (err, isMatch) => {
		if (err) {
			return next(new BadRequestError(`OTP is invalid or expired`));
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
