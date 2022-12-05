const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const crypto = require("crypto");
const path = require("path");
require("dotenv").config();
MongoClient = require("mongodb").MongoClient;
const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const CoverLetter = require("../models/coverletter");

const saveCoverletter = async (req, res) => {
	req.body.user_id = req.user.userId;

	const coverletter = await CoverLetter.create(req.body);

	return res
		.status(StatusCodes.OK)
		.json({ message: "Cover Letter Saved successfully", coverletter });
};

module.exports = {
	saveCoverletter,
};
