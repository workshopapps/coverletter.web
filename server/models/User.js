const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { generateOTP } = require("../utils/generateOTP");

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please provide name"],
		maxlength: 50,
		minlength: 3,
	},
	email: {
		type: String,
		required: [true, "Please provide email"],
		match: [
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			"Please provide a valid email",
		],
		unique: true,
	},
	password: {
		type: String,
		required: [true, "Please provide password"],
		minlength: 6,
	},
	status: {
		type: String,
		enum: ["Pending", "Active"],
		default: "Pending",
	},
	confirmationCode: {
		type: String
	},
	otp: {type:String,default:null},
	passwordResetExpires: {type:Date,default:null},
	tokens:[
		{
			token:{
				type:String,
				required:true
			}
		}
	]
});


UserSchema.methods.createJWT = function () {
	const token = jwt.sign(
		{
			userId: this._id,
			name: this.name,
			email: this.email,
			status: this.status,
		},
		process.env.JWT_SECRET,
		{
			expiresIn: "5h",
		}
	);
this.tokens = this.tokens.concat({ token})
this.save(token)

	return token
};

UserSchema.methods.comparePassword = async function (canditatePassword) {
	const isMatch = await bcrypt.compare(canditatePassword, this.password);
	return isMatch;
};

UserSchema.methods.createPasswordResetToken = function () {
	const otp = generateOTP(4);
	this.otp = otp;
	return otp;
};

module.exports = mongoose.model("User", UserSchema);
