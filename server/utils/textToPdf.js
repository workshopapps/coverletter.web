const PDFDocument = require("pdfkit");
const getStream = require("get-stream");

module.exports = async (text, extra = {}) => {
	const doc = new PDFDocument();

	// you need to pass in the path to the .tff if you want to change the font
	doc.font(`${extra.font ? extra.font : "Helvetica"}`)
		.fontSize(`${extra.fontSize ? extra.fontSize : 17.6}`)
		.text(text);
	doc.end();

	// this base64 can be stored in the database later on.
	const stream = await getStream.buffer(doc);
	const base64 = stream.toString("base64");
	return base64;
};

// how to use me
// textToPdf("this should be in the pdf").then((res) => console.log(res));
