const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const leadAdmin = async (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader || !authHeader.startsWith("Bearer")) {
		throw new UnauthenticatedError("Authentication invalid");
	}
	const token = authHeader.split(" ")[1];

	try {
		const payload = jwt.verify(token, process.env.JWT_SECRET);
		if (payload.role !== "Lead-admin") {
			throw new UnauthenticatedError("Authentication invalid");
		}
		req.user = {
			userId: payload.userId,
			name: payload.name,
			email: payload.email,
			role: payload.role,
		};
		next();
	} catch (error) {
		throw new UnauthenticatedError("Authentication invalid");
	}
};

const admin = async (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader || !authHeader.startsWith("Bearer")) {
		throw new UnauthenticatedError("Authentication invalid");
	}
	const token = authHeader.split(" ")[1];

	try {
		const payload = jwt.verify(token, process.env.JWT_SECRET);
		if (payload.role !== "Admin" && payload.role !== "Lead-admin") {
			throw new UnauthenticatedError("Authentication invalid");
		}
		req.user = {
			userId: payload.userId,
			name: payload.name,
			email: payload.email,
			role: payload.role,
		};
		next();
	} catch (error) {
		throw new UnauthenticatedError("Authentication invalid");
	}
};

module.exports = {
	leadAdmin,
	admin,
};
