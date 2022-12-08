import { saveAs } from "file-saver";

export const convertToTxt = async () => {
	const html = document.getElementById("coverletter-target").innerText;
	const blob = new Blob([html], { type: "text/plain" });
	saveAs(blob, "cover-letter.txt");
};
