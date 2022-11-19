const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { generateOTP } = require("../utils/generateOTP");
const { BadRequestError } = require("../errors");
const sendEmail = require("../utils/sendEmail");

const register = async (req, res) => {
	const { email, name, password } = req.body;

	const oldUser = await User.findOne({ email });

	if (oldUser) {
		throw new BadRequestError("Email already exists");
	}
	let confirmationCode = generateOTP(4)
	
	const user = new User({
		name,
		email,
		password,
		confirmationCode,
	});
	
	await sendEmail(req.body.email, "Verify email", "<h3>OTP for account verification is </h3>"  + `<h1 style='font-weight:bold;'>" + ${confirmationCode} +"</h1>`);

	 await user.save();
	
	res.status(StatusCodes.CREATED).json("Signup was successful.");
};
const verify = async(req,res) => {
	
	const user = await User.findOne({confirmationCode:req.body.otp})
	
	if(user){
	   user.status = "Active"
	   user.confirmationCode = ""  
	    await user.save()
		res.status(StatusCodes.OK).json('User has been successfully verified')
	}else{
		res.status(StatusCodes.BAD_REQUEST).json("Verification failed")
	}
}

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

module.exports = {
	register,
	login,
	updatePassword,
	verify
};
