const pdf = require("pdf-parse");

// converts the cv (pdf) to string
const getpdfTotext = async (file) => {
	let parsedPdfFile;
	let pdfbuffer = file;
	try {
		parsedPdfFile = await pdf(pdfbuffer);
		return parsedPdfFile.text;
	} catch (error) {
		return error.message;
	}
};

module.exports = { getpdfTotext };
