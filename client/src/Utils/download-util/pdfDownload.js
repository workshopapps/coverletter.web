import jsPdf from "jspdf";
import { Manrope } from "../../jsPdf-fonts";

const downloadPdf = (domId) => {
	const doc = new jsPdf({ unit: "px", format: "a4" }); // create jsPDF object
	doc.addFileToVFS("Manrope.ttf", Manrope);
	doc.addFont("Manrope.ttf", "Manrope", "normal");
	doc.setFont("Manrope");
	const domToSave = document.getElementById(domId);

	doc.html(domToSave, {
		callback: (pdf) => {
			pdf.save("MyPdfFile.pdf");
		},
		width: 50,
		margin: [10, 20, 10, 20],
	});
};

export default downloadPdf;
