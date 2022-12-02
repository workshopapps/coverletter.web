import saveAs from "file-saver";
import { convert } from "html-to-text";

export const convertToTxt = async () => {
	const html = document.getElementById("coverletter-target").innerHTML;
	const text = convert(html, {
		wordwrap: 130,
	});
	var blob = new Blob([text], {
		type: "text/plain;charset=utf-8",
	});
	saveAs(blob, "download.txt");
	console.log(text);
};
