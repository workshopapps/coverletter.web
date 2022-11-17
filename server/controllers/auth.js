const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { randomString } = require("../utils/randomString");
const { BadRequestError } = require("../errors");
const sendEmail = require("../utils/sendEmail");
const UnauthenticatedError = require("../errors/unauthenticated");

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

const login = async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return next(new UnauthenticatedError("User not authenticated"));
	}
	const user = await User.findOne({ email });

	if (!user || !(await user.comparePassword(password))) {
		return next(new UnauthenticatedError("Incorrect email or password"));
	}
	const token = user.createJWT();

	res.status(200).json({
		status: "success",
		token,
	});
};

module.exports = {
	register,
	login,
};
