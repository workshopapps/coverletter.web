const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { randomString } = require("../utils/randomString");
const { BadRequestError, UnauthenticatedError } = require("../errors");
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

const login = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return next(
				new UnauthenticatedError(
					"Please provide a valid email and password"
				)
			);
		}
		const user = await User.findOne({ email });
		if (!user) {
			return next(
				new UnauthenticatedError(
					"Authentication failed! User doesn't exist"
				)
			);
		}

		if (user && !(await user.comparePassword(password))) {
			return next(
				new UnauthenticatedError("Incorrect email or password")
			);
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

module.exports = {
	register,
	login,
};
