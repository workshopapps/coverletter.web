const express = require("express");
const imageRouter = express.Router();
const upload = require("../utils/multer");
const cloudinary = require("../utils/cloudinary");
const { image } = require("../utils/cloudinary");

// imageRouter.post("/", upload.single("image"), async (req, res) => {});

// imageRouter.post("/delete", async (req, res) => {
// 	try {
// 		const result = await cloudinary.uploader.destroy(req.body.public_id);
// 		return res.status(202).send(result);
// 	} catch (err) {
// 		res.status(409).send(err);
// 	}
// });

const uploadImage = async (req, res, next) => {
	try {
		const result = await cloudinary.uploader.upload(req.file.path);
		const { secure_url, public_id } = req.public_id;
		// return res.status(200).json({ secure_url, public_id });
		next();
	} catch (err) {
		console.log(err);
		throw new Error("Failed to upload the image");
		// return res.status(400).send(err);
	}
};

const deleteImae = async (req, res, next) => {
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
module.exports = imageRouter;
