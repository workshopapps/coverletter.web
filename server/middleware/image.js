const express = require("express");
const imageRouter = express.Router();
const upload = require("../utils/multer");
const cloudinary = require("../utils/cloudinary");
const { image } = require("../utils/cloudinary");

imageRouter.post("/", upload.single("image"), async (req, res) => {
	try {
		const result = await cloudinary.uploader.upload(req.file.path);
		const { secure_url, public_id } = result;
		return res.status(200).json({ secure_url, public_id });
	} catch (err) {
		console.log(err);
		return res.status(400).send(err);
	}
});

imageRouter.post("/delete", async (req, res) => {
	try {
		const result = await cloudinary.uploader.destroy(req.body.public_id);
		return res.status(202).send(result);
	} catch (err) {
		res.status(409).send(err);
	}
});

module.exports = imageRouter;
