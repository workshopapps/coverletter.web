const User = require("../models/User");
const { UnauthenticatedError } = require("../errors");

const verify = async (req, res, next) => {
	if (req.user.login === "Signin") {
		const user = await User.findOne({ email: req.user.email });

		if (user.status === "Pending") {
			throw new UnauthenticatedError("User has not been verified");
		}
	}
	next();
};

module.exports = verify;
