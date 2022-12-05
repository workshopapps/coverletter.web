const express = require("express");
const imageRouter = express.Router();
const upload = require("../utils/multer");
const { cloudinary } = require("../utils/cloudinary");
const { image } = require("../utils/cloudinary");

const uploadImage = async (req, res, next) => {
	try {
		const file = req.files.myFile;
		const result = await cloudinary.uploader.upload(file.tempFilePath, {
			public_id: `${Date.now()}`,
			resource_type: "auto",
			folder: "images",
		});
		req.result = result;
		next();
	} catch (err) {
		// console.log(err);
		throw new Error("Failed to upload the image");
		// return res.status(400).send(err);
	}
};

const deleteImage = async (req, res, next) => {
	try {
		const result = await cloudinary.uploader.destroy(req.body.public_id);
		const { public_id } = req.public_id;
		next();
		// return res.status(202).send(result);
	} catch (err) {
		// res.status(409).send(err);
		throw new Error("Failed to delete the image");
	}
};
module.exports = { uploadImage, deleteImage };
