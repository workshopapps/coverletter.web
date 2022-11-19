const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { randomString } = require("../utils/randomString");
const { BadRequestError } = require("../errors");
const sendEmail = require("../utils/sendEmail");

const register = async (req, res) => {
	const { email, name, password } = req.body;

	const oldUser = await User.findOne({ email });

	if (oldUser) {
		throw new BadRequestError("Email already exists");
	}
	let confirmationCode = randomString();
	console.log(confirmationCode);
	const user = new User({
		name,
		email,
		password,
		confirmationCode,
	});
	const url = `${process.env.BASE_URL}/auth/verify/${confirmationCode}`;
	await sendEmail(req.body.email, "Verify email", url);

	const savedUser = await user.save();
	const token = savedUser.createJWT();

	res.status(StatusCodes.CREATED).json({ user: token });
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

module.exports = {
	register,
	updatePassword,
};
