const User = require("../models/User");
const { UnauthenticatedError } = require("../errors");

const verify = async (req, res, next) => {
	console.log(req.user.login, req.user.userId);
	if (req.user.login === "Signin") {
		const user = await User.findOne({ email: req.user.email });
		console.log(user);
		if (user.status === "Pending") {
			throw new UnauthenticatedError("User has not been verified");
		}
	}
	next();
};

module.exports = verify;
