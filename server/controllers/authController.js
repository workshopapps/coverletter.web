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
	console.log(confirmationCode);
	const user = new User({
		name,
		email,
		password,
		confirmationCode,
	});
	
	await sendEmail(req.body.email, "Verify email", confirmationCode);

	 await user.save();
	
	res.status(StatusCodes.CREATED).json("Signup was successful.");
};
const verify = async(req,res) => {
	
	const user = await User.findOne({confirmationCode:req.body.otp})
	
	if(user){
	   user.status = "Active"
	    await user.save()
		res.status(StatusCodes.OK).json('User has been successfully verified')
	}else{
		res.status(StatusCodes.BAD_REQUEST).json("Verification failed")
	}
}

module.exports = {
	register,verify
};
