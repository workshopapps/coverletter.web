const express = require("express");
const imageRouter = express.Router();
const upload = require("../utils/multer");
const { cloudinary } = require("../utils/cloudinary");
const { image } = require("../utils/cloudinary");
const BadRequestError = require("../errors/bad-request");

const uploadImage = async (req, res, next) => {
	try {
		const file = req.files.myFile;
		const upload = await cloudinary.uploader.upload(file.tempFilePath, {
			public_id: `${Date.now()}`,
			resource_type: "auto",
			folder: "images",
		});
		req.upload = {
			public_id: upload.public_id,
			url: upload.url,
		};
		next();
	} catch (err) {
		throw new BadRequestError("Failed to upload the image");
	}
};

const deleteImage = async (req, res, next) => {
	try {
		const result = await cloudinary.uploader.destroy(req.body.public_id);
		req.delete = result;
		next();
	} catch (err) {
		throw new Error("Failed to delete the image");
	}
};
module.exports = { uploadImage, deleteImage };
