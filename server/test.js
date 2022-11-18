const { randomString } = require("./utils/randomString");

// const me = function () {
// 	const otp = Math.floor(1000 + Math.random() * 9000).toString("hex");
// 	this.resetPasswordOtp = crypto
// 		.createHash("sha256")
// 		.update(otp)
// 		.digest("hex");
// 	console.log({ otp: otp }, this.resetPasswordOtp);
// 	return otp;
// };

console.log(randomString(4));
