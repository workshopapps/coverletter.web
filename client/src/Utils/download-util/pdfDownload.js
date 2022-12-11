import jsPdf from "jspdf";
import { Manrope } from "../../jsPdf-fonts";
import sendMail from "../SendCoverToEmail";

const downloadPdf = async (domId, sendToMail, email) => {
	const doc = new jsPdf({ unit: "px", format: "a4" }); // create jsPDF object
	doc.addFileToVFS("Manrope.ttf", Manrope);
	doc.addFont("Manrope.ttf", "Manrope", "normal");
	doc.setFont("Manrope");
	const domToSave = document.getElementById(domId);

	doc.html(domToSave, {
		callback: (pdf) => {
			const file = pdf.save("MyPdfFile.pdf");
			// if (sendToMail) {
			// 	sendMail(email, file);
			// }
		},
		width: 50,
		margin: [10, 0, 10, 25],
	});
	console.log(domToSave, sendToMail, email);
};

export default downloadPdf;
