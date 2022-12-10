const User = require("../models/User");
const Admin = require("../models/Admin");
const { StatusCodes } = require("http-status-codes");
const { generateOTP } = require("../utils/generateOTP");
const hashPassword = require("../utils/hashPassword");
const { BadRequestError } = require("../errors");
const { sendEmail, mailStyle } = require("../utils/sendEmail");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
	let { email, name, password } = req.body;
	email = email.toLowerCase();
	const oldUser = await User.findOne({
		email,
	});

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

	user.password = await hashPassword(user.password);
	await user.save();

	const message = mailStyle(
		"Use the OTP below to verify your account.",
		confirmationCode
	);

	await sendEmail(req.body.email, "Verify email", message);

	return res.status(StatusCodes.CREATED).json("Signup was successful.");
};

const verify = async (req, res) => {
	const update = {
		status: "Active",
		confirmationCode: "",
	};
	const user = await User.findOneAndUpdate(
		{
			confirmationCode: req.body.otp,
		},
		update,
		{
			new: true,
		}
	);

	if (user) {
		return res
			.status(StatusCodes.OK)
			.json("User has been successfully verified");
	} else {
		return res.status(StatusCodes.BAD_REQUEST).json("Verification failed");
	}
};

const login = async (req, res, next) => {
	try {
		let { email, password } = req.body;
		email = email.toLowerCase();
		if (!email || !password) {
			return next(
				new BadRequestError("Please provide a valid email and password")
			);
		}
		const user = await User.findOne({
			email,
		});
		if (!user) {
			return next(new BadRequestError("Invalid email or password"));
		}

		let AwaitedUser = await user.comparePassword(password);

		if (user && !AwaitedUser) {
			return next(new BadRequestError("Invalid email or password"));
		}

		if (user && !(await user.comparePassword(password))) {
			return next(new BadRequestError("Invalid email or password"));
		}
		const token = user.createJWT();

		return res.status(201).json({
			status: "success",
			user: user._id,
			token,
		});
	} catch (error) {
		console.log(error);
	}
};

const logout = async (req, res) => {
	const token = req.headers.authorization.split(" ")[1];

	const user = await User.findById(req.user.userId);
	req.user = user;
	req.token = token;
	if (!req.user || !req.token) {
		return next(new BadRequestError("You are not logged in"));
	}

	delete req.token;
	delete req.user;

	return res.status(201).json({
		message: "You have logged out successfully",
	});
};

const protect = async (req, res, next) => {
	//////////////////////// ~ PROTECT ROUTE ~  /////////////////////////////////////
	// 1) Getting token and check if it's there
	let Mytoken = req.headers.authorization.split(" ")[1];
	if (!Mytoken) {
		return next(
			new BadRequestError("You are not logged in! login to gain access")
		);
	}
	// 2) Validate token
	const decoded = await promisify(jwt.verify)(
		Mytoken,
		process.env.JWT_SECRET
	);
	const freshUser = await User.findById(decoded.userId);
	if (!freshUser) {
		return next(
			new BadRequestError(
				"The User belonging to this Token does not exist"
			)
		);
	}
	// Get Logged In Users Here
	req.user = freshUser;
	next();
};

const updatePassword = async (req, res, next) => {
	try {
		//1) Get User from collection
		const user = await User.findById(req.user.userId).select("+password");
		// 2) Get the body entry
		const { oldPassword, password, confirmPassword } = req.body;
		// 3) check if user old password == the password in DB
		if (!(await user.comparePassword(oldPassword, user.password))) {
			return next(
				new BadRequestError("Please Enter Your Correct Old Password")
			);
		}
		// 4) check if user  new password == old password
		if (await user.comparePassword(password, user.password)) {
			return next(
				new BadRequestError(
					"New Password Must be different from old password"
				)
			);
		}
		// 5) check if password & confirmPassword are the same
		if (password != confirmPassword) {
			return next(
				new BadRequestError(
					"Password and confirm Password must be the same."
				)
			);
		}
		//6) Update password
		user.password = await hashPassword(password);
		const savedUser = await user.save();
		const token = savedUser.createJWT();
		return res.status(StatusCodes.CREATED).json({
			user: token,
		});
	} catch (err) {
		console.log(err);
	}
};

const forgotPassword = async (req, res, next) => {
	try {
		var user = await User.findOne({
			email: req.body.email.toLowerCase(),
		});
		if (!user) {
			return next(
				new BadRequestError("There is no user with this email address.")
			);
		}
		var otpResetToken = user.createPasswordResetToken();
		await user.save();
	} catch (error) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			msg: "Something went Wrong",
		});
	}

	const message = mailStyle(
		"Use the following OTP to complete your password reset procedure.",
		otpResetToken
	);
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
	let { password, email, confirmPassword } = req.body;
	email = email.toLowerCase();

	if (password !== confirmPassword) {
		throw new BadRequestError("confirm with a similar password");
	}

	try {
		const user = await User.findOne({
			email: email,
		});

		if (!user) {
			throw new BadRequestError("email not found in database");
		}

		user.password = await hashPassword(password);
		user.otp = null;
		user.passwordResetExpires = null;
		await user.save();

		return res.status(StatusCodes.CREATED).json({
			msg: "Password change was successful.",
		});
	} catch (error) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			msg: "Something went Wrong",
		});
	}
};

const validateOTP = async (req, res) => {
	let { otp, email } = req.body;
	email = email.toLowerCase();
	try {
		const user = await User.findOne({
			email,
		});
		if (!user) {
			throw new BadRequestError("email not found in database");
		}
		const verifyOTP = otp == user.otp;
		if (!verifyOTP) {
			throw new BadRequestError("OTP is invalid or expired");
		}
		const token = user.createJWT();
		return res.status(StatusCodes.CREATED).json({
			msg: "otp verification was successful.",
			token: token,
		});
	} catch (error) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			msg: "Something went Wrong",
		});
	}
};

const getUserDetails = async (req, res) => {
	const { id: userId } = req.params;
	const user = await User.findOne({ _id: userId });
	delete user.password;
	delete user.otp;
	return res.status(StatusCodes.OK).json(user);
};

const googleSuccess = (req, res) => {
	const user = req.user;
	const token = jwt.sign({ user }, process.env.JWT_SECRET, {
		expiresIn: "2h",
	});
	if (req.user) {
		res.status(200).json({
			success: true,
			message: "successfull",
			user: req.user,
			token: token,
		});
	}
};
const googleLogout = (req, res) => {
	req.session.destroy();
	res.redirect(process.env.CLIENT_URL);
};

const adminLogin = async (req, res, next) => {
	try {
		let { email, password } = req.body;
		email = email.toLowerCase();

		if (!email || !password) {
			return next(
				new BadRequestError("Please provide a valid email and password")
			);
		}
		const admin = await Admin.findOne({
			email,
		});

		if (!admin || !(await admin.comparePassword(password))) {
			return next(new BadRequestError("Invalid email or password"));
		}
		if (admin.status !== "Active") {
			return next(new BadRequestError("Unverified Account!!!"));
		}
		const token = admin.createJWT();
		const data = {
			status: admin.status,
			name: admin.name,
			isAdmin: admin.isAdmin,
			role: admin.role,
			email: admin.email,
		};
		return res.status(201).json({
			status: "success",
			token,
			data,
		});
	} catch (error) {
		res.status(StatusCodes.BAD_REQUEST).json({
			status: "fail",
			message: error.message,
		});
	}
};
const updateProfileIcon = async (req, res) => {
	try {
		const id = req.user.userId;
		const { public_id, url } = req.upload;
		const user = await User.findByIdAndUpdate(
			id,
			{ profileIconUrl: url, profileIconCloudinaryId: public_id },
			{ new: true }
		);
		const { profileIconUrl, profileIconCloudinaryId } = user;
		return res.status(StatusCodes.CREATED).json({
			status: "success",
			data: { profileIconUrl, profileIconCloudinaryId },
		});
	} catch (error) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			status: "fail",
			message: error.message,
		});
	}
};

const updateUser = async (req, res) => {
	try {
		const { name, jobRole } = req.body;

		const userId = req.user.userId;

		const user = await User.findByIdAndUpdate(
			userId,
			{ name, jobRole },
			{ new: true }
		);
		if (!user) {
			throw new BadRequestError(`user with the ${userId} does not exist`);
		}
		const data = {
			name: user.name,
			jobRole: user.jobRole,
		};

		return res.status(StatusCodes.OK).json({ success: true, data });
	} catch (error) {
		return res.status(400).json({ success: false, error: error.message });
	}
};
module.exports = {
	register,
	login,
	logout,
	forgotPassword,
	protect,
	updatePassword,
	verify,
	resetPassword,
	validateOTP,
	getUserDetails,
	googleSuccess,
	adminLogin,
	googleLogout,
	updateProfileIcon,
	updateUser,
};
