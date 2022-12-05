require("dotenv").config();
const Admin = require("../models/Admin");
const { StatusCodes } = require("http-status-codes");
const { generateOTP } = require("../utils/generateOTP");
const hashPassword = require("../utils/hashPassword");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const sendEmail = require("../utils/sendEmail");

const createAdmin = async (req, res) => {
	const { email, name, password, adminCode } = req.body;

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
		const token = admin.createJWT();
		const data = {
			name: admin.name,
			admin: admin._id,
			email: admin.email,
			role: admin.role,
			token,
		};
		return res.status(StatusCodes.OK).json({ status: "success", data });
	} else {
		throw new BadRequestError("Verification failed");
	}
};

const deleteAdmin = async (req, res) => {
	const admin = await Admin.findById(req.params.id);

	if (!admin) {
		throw new BadRequestError(`user does not exist`);
	}

	if (admin._id != req.user.userId) {
		throw new UnauthenticatedError(
			`you are not authorized to carry out this operation`
		);
	}

	await Admin.findByIdAndDelete(req.params.id);
	return res.status(StatusCodes.OK).json({
		success: true,
		data: {},
	});
};

module.exports = {
	createAdmin,
	verifyAdmin,
	deleteAdmin,
};
