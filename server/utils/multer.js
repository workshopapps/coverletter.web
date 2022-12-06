// import multer, { diskStorage } from "multer";
// import { extname } from "path";

const multer = require("multer");
const { diskStorage } = require("multer");
const { extname } = require("path");

// Multer config
// export default multer({});

const upload = multer({
	storage: diskStorage({}),
	fileFilter: (req, file, cb) => {
		let ext = extname(file.originalname);
		if (
			ext !== ".jpg" &&
			ext !== ".jpeg" &&
			ext !== ".png" &&
			ext !== ".pdf"
		) {
			cb(new Error("File type is not supported"), false);
			return;
		}
		cb(null, true);
	},
});

module.exports = upload;
