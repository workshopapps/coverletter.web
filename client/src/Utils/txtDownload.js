import sendMail from "./SendCoverToEmail";
import { saveAs } from "file-saver";

export const convertToTxt = async (sendToMail, email) => {
	const html = document.getElementById("coverletter-target").innerText;
	const blob = new Blob([html], { type: "text/plain" });
	const myFile = new File([blob], "file.txt", {
		type: blob.type,
	});
	const file = URL.createObjectURL(blob);

	if (sendToMail) {
		sendMail(email, myFile);
	}
	saveAs(blob, "cover-letter.txt");
};
