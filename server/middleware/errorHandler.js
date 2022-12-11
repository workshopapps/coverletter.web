const customErr = require("../errors/customErr");
const { devErr, prodErr } = require("../errors/envErrors");
const { StatusCodes } = require("http-status-codes");

const castErrDB = (err) => {
	//Handling invalid mongoDB id issues
	const message = `Invalid ${err.path}: ${err.value}.`;
	return new customErr(message, StatusCodes.BAD_REQUEST);
};

const duplicateErrDB = (err) => {
	//Handle DB error in the case of a duplicate field that should not exist
	const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
	//console.log(value);

	const message = `Duplicate field value: ${value}. Please use another value!`;
	return new customErr(message, StatusCodes.BAD_REQUEST);
};

const validationErrDB = (err) => {
	//Handle DB validation errors
	console.log("In here");
	const errors = Object.values(err.errors).map((el) => el.message);

	const message = `Invalid input data. ${errors.join(". ")}`;
	return new customErr(message, StatusCodes.BAD_REQUEST);
};

const JWTError = () =>
	new customErr(
		"Invalid token. Please log in again!",
		StatusCodes.UNAUTHORIZED
	);

const JWTExpiredError = () =>
	new customErr(
		"Your token has expired! Please log in again.",
		StatusCodes.UNAUTHORIZED
	);

module.exports = (err, req, res, next) => {
	// console.log(err.stack);
	err.statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
	err.status = err.status || "error";

	if (process.env.APP_ENV === "dev") {
		devErr(err, req, res);
	} else if (process.env.APP_ENV === "prod") {
		let error = { ...err };
		error.message = err.message;

		if (err.name === "CastError") error = castErrDB(error);
		if (err.code === 11000) error = duplicateErrDB(error);
		if (err.name === "ValidationError") error = validationErrDB(error);
		if (err.name === "JsonWebTokenError") error = JWTError();
		if (err.name === "TokenExpiredError") error = JWTExpiredError();

		prodErr(error, req, res);
	}
};
