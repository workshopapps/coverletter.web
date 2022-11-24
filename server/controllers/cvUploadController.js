const { BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const cvUpload = async (req, res) => {
	// check if you selected a file
	console.log(req.files);
	if (!req.files) throw new BadRequestError("You Must upload a File");
	console.log(1);

	const file = req.files.myFile;
	const splitName = file.name.split(".");
	const extension = splitName[splitName.length - 1];

	// check for the file type
	if (extension != "pdf") {
		throw new BadRequestError("You Must Upload a PDF File");
	}
	res.status(StatusCodes.CREATED).json({ status: "success" });
};

module.exports = { cvUpload };
