import sendMail from "./SendCoverToEmail";
import { saveAs } from "file-saver";

export const convertToTxt = async (sendToMail, email) => {
	const html = document.getElementById("coverletter-target").innerText;
	const blob = new Blob([html], { type: "text/plain" });
	const file = URL.createObjectURL(blob);

	if (sendToMail) {
		sendMail(email, file);
	}
	saveAs(blob, "cover-letter.txt");
};
