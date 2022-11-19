const html_to_pdf = require("html-pdf-node");
const fs = require("fs");

module.exports = async () => {
	let options = { format: "A4" };
	let file = {
		url: "https://cute-pegasus-e10bba.netlify.app",
	};
	const pdfBuffer = await html_to_pdf.generatePdf(file, options);
	console.log("PDF Buffer:-", pdfBuffer);
	fs.createWriteStream("res.pdf").write(pdfBuffer);
};
