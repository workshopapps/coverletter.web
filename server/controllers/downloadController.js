const { convertToDoc } = require("../utils/convertToDoc");
const fs = require("fs");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");

const downloadCoverLetter = async function (req, res) {
	try {
		const data = req.body.data;
		const content =
			`${data.company_name}\n${data.company_address}\n
        ${data.city},${data.country}\n` + data.cover_letter;

		const pathToFile = convertToDoc(content, data.format);
		let full_route = req.get("host") + req.originalUrl;
		let url = `http://${full_route}?file=${pathToFile}`;
		return res
			.status(StatusCodes.CREATED)
			.json({ status: "success", redirect: url });
	} catch (error) {
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ msg: "Oops! The problem is from us" });
	}
};

const download = async function (req, res) {
	try {
		const pathToFile = req.query.file;
		return res.download(pathToFile, (err) => {
			if (err) {
				throw new BadRequestError("Something went wrong");
			}
			fs.unlink(pathToFile, (err) => err && console.log(err));
			return res
				.status(StatusCodes.CREATED)
				.json({ status: "success", redirect: url });
		});
	} catch (error) {
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ msg: "Oops! The problem is from us" });
	}
};

module.exports = { downloadCoverLetter, download };
