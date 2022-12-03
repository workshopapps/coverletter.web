const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const crypto = require("crypto");
const path = require("path");
require("dotenv").config();
MongoClient = require("mongodb").MongoClient;
const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const CoverLetter = require("../models/coverletter");

uploadCoverLetter = async (req, res) => {
	MongoClient.connect(process.env.MONGO_URI).then((client) => {
		const database = client.db("database");
		storage = new GridFsStorage({
			db: database,
			file: (req, file) => {
				return new Promise((resolve, reject) => {
					crypto.randomBytes(16, (err, buf) => {
						if (err) {
							console.log(err);
						}
						const filename =
							buf.toString("hex") +
							path.extname(req.file.originalname);
						console.log(filename);
						const fileInfo = {
							filename: filename,
							bucketName: "uploads",
						};
						resolve(fileInfo);
					});
				});
			},
		});
		const upload = multer({ storage });
		upload.single("file");
		res.status(200).json({
			status: "File uploaded successfully",
			filename: req.files.file.name,
			filetype: req.files.file.mimetype,
		});
	});
};

const saveCoverletter = async (req, res) => {
	const {
		user_id,
		cover_letter,
		company_name,
		company_address,
		city,
		country,
		years_of_exp,
		date,
		recipient_name,
		recipient_department,
		recipient_email,
		recipient_phone_no,
	} = req.body;

	// console.log(User.findById(req.body.user_id));

	const coverletter = await CoverLetter.create({
		user_id,
		cover_letter,
		company_name,
		company_address,
		city,
		country,
		years_of_exp,
		date,
		recipient_name,
		recipient_department,
		recipient_email,
		recipient_phone_no,
	});

	return res
		.status(StatusCodes.OK)
		.json({ message: "Cover Letter Saved successfully", coverletter });
};

module.exports = {
	uploadCoverLetter,
	saveCoverletter,
};
