import { Packer } from "docx";
import { saveAs } from "file-saver";
import myTemplate1 from "../../Components/docx-templates/Template1";
import sendMail from "../SendCoverToEmail";

const downloadDOCX = async (data, userData, sendToMail, email) => {
	const docxTemplate1 = myTemplate1({ data, userData });
	const blob = await Packer.toBlob(docxTemplate1);
	if (sendToMail) {
		sendMail(email, blob);
	}
	saveAs(blob, "My cover letter.docx");
};

export default downloadDOCX;
