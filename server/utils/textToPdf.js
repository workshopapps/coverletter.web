const html_to_pdf = require("html-pdf-node");
const fs = require("fs");

module.exports = async () => {
	let options = { format: "A4" };
	let file = {
		url: "https://remarkable-profiterole-835791.netlify.app/cover%20letter",
	};
	const pdfBuffer = await html_to_pdf.generatePdf(file, options);
	console.log("PDF Buffer:-", pdfBuffer);
	fs.createWriteStream("res.pdf").write(pdfBuffer);
};
