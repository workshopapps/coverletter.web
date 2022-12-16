//Need function to save and get single resume in text/string format
//Actions can only be carried out by authenticated users
//Cover letter generate function needs to be modified accordingly

//What is the flow for saving resume -- Whenever user attempts generation from  original generation page if the user is signed in, user will be given the option to save the current cv

const resumeDB = require("../models/resume");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");

//Function to return errors for this controller - Dry coding
const errorRes = (res, error) => {
	return res.status(StatusCodes.BAD_REQUEST).json({
		status: "fail",
		message: error.message,
	});
};

const saveResume = async (req, res, next) => {
	try {
		//Research better alternates to enforce storage restrictions
		const resumes = await resumeDB.find({ user_id: req.user.userId });
		//This check below has to be modified to meet app requirements, maybe based on payment plans later on
		if (resumes.length === 3 /*Condition to be reviewed*/) {
			return res.status(StatusCodes.FORBIDDEN).json({
				status: "fail",
				message:
					"Already at maximum storage, Upgrade or delete to store more",
			});
		}
		const resume = await resumeDB.create({
			user_id: req.user.userId,
			content: req.body.content,
			label: req.body.label,
		});
		res.status(StatusCodes.CREATED).json({
			status: "success",
			message: "Resume saved successfully",
		});
	} catch (error) {
		errorRes(res, error);
	}
};

const getResume = async (req, res, next) => {
	try {
		const resume = await resumeDB.findById(req.params.id);
		if (!resume) {
			throw new NotFoundError("Requested resume does not exist");
		}
		if (resume.userid !== req.user.userId) {
			return res.status(StatusCodes.FORBIDDEN).json({
				status: "fail",
				message: "Resume does not belong to this user",
			});
		}
		res.status(StatusCodes.OK).json({
			status: "success",
			data: resume,
		});
	} catch (error) {
		errorRes(res, error);
	}
};

const getAllresumes = async (req, res, next) => {
	try {
		const resumes = await resumeDB.find({ user_id: req.user.userId });
		//Check returned length for empty resume - Can be empty if user has no saved resume or if user does not exist(Should not arise because route is protected)
		if (resumes.length === 0) {
			return res.status(404).json({
				status: "success",
				message: "No resumes for this user",
			});
		} else if (resumes.length > 0) {
			res.status(StatusCodes.OK).json({
				status: "success",
				data: {
					resumes,
				},
			});
		}
	} catch (error) {
		errorRes(res, error);
	}
};

const delResume = async (req, res, next) => {
	try {
		//There is a privacy issue here - based on this current implementation, a user can delete a resume that does not belong to him
		// Potential restriction I have in mind would require two queries, is there a way to check that the user attempting to delete is the owner and if condition passess, delete in one query?
		const resume = await resumeDB.findByIdAndDelete(req.params.id);

		if (!resume) {
			throw new NotFoundError("Requested resume does not exist");
		}

		res.status(204).json({
			status: "success",
			message: "Deleted",
		});
	} catch (error) {
		errorRes(res, error);
	}
};

module.exports = {
	saveResume,
	getResume,
	delResume,
	getAllresumes,
};
