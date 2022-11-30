const multer = require("multer");
const path = require("path");
// const pdfParse = require('pdf-parse');
const fs = require('fs')

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		// Uploads is the Upload_folder_name
		cb(null, "uploads");
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});


// Define the maximum size for uploading
// document i.e. 1 MB. it is optional
const maxSize = 5 * 1000 * 1000;

exports.uploadCV = multer({
	storage: storage,
	limits: { fileSize: maxSize },
	fileFilter: function (req, file, cb) {
		// Set the filetypes, it is optional
		const filetypes = /pdf/;
		const mimetype = filetypes.test(file.mimetype);

		const extname = filetypes.test(path.extname(file.originalname));

		if (mimetype && extname) {
			return cb(null, true);
		}

		cb(
			"Error: File upload only supports the " +
				"following filetypes - " +
				filetypes
		);
        next(
            // Error MiddleWare for multer file upload, so if any
            // error occurs, the image would not be uploaded!
            upload(req,res, (err) => {
  
                if(err) {
          
                    // ERROR occurred (here it can be occurred due
                    // to uploading image of size greater than
                    // 1MB or uploading different file type)
                    res.send(err)
                }
                else {
          
                    // SUCCESS, cv successfully uploaded
                    res.send("Success, CV uploaded!")
                }
            })
            

        );
	}
    

	// myCV is the name of file attribute
}).single("myCV");