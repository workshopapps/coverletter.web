require("dotenv").config();
const Admin = require("../models/Admin");
const { StatusCodes } = require("http-status-codes");
const { generateOTP } = require("../utils/generateOTP");
const hashPassword = require("../utils/hashPassword");
const { BadRequestError } = require("../errors");
const sendEmail = require("../utils/sendEmail");
const jwt = require("jsonwebtoken");

const createAdmin = async (req, res) => {
	const { email, name, password, adminCode, role } = req.body;

	const isEmailUsed = await Admin.findOne({ email });

	if (isEmailUsed) {
		throw new BadRequestError("Email already exists");
	}
	let confirmationCode = generateOTP(4);
	const admin = new Admin({
		name,
		email,
		password,
		confirmationCode,
		role,
	});
	if (adminCode === process.env.ADMIN_CODE) {
		admin.isAdmin = true;
		await sendEmail(
			req.body.email,
			"Verify email",
			"<h3>OTP for account verification is </h3>" +
				`<h1 style='font-weight:bold;'>" + ${confirmationCode} +"</h1>`
		);
		admin.password = await hashPassword(admin.password);
		await admin.save();

		return res.status(StatusCodes.CREATED).json({ status: "success" });
	}
	throw new BadRequestError("Invalid admin code, unable create account");
};

const verifyAdmin = async (req, res) => {
	const update = {
		status: "Active",
		confirmationCode: "",
	};
	const admin = await Admin.findOneAndUpdate(
		{
			confirmationCode: req.body.otp,
		},
		update,
		{ new: true }
	);

	if (admin) {
		const token = user.createJWT();
		const data = {
			name: admin.name,
			email: admin.email,
			role: admin.role,
			token,
		};
		return res.status(StatusCodes.OK).json({ status: "success", data });
	} else {
		throw new BadRequestError("Verification failed");
	}
};

module.exports = {
	createAdmin,
	verifyAdmin,
};
