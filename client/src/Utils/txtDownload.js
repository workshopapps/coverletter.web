import sendMail from "./SendCoverToEmail";

export const convertToTxt = async (sendToMail, email) => {
	const html = document.getElementById("coverletter-target").innerText;
	const blob = new Blob([html], { type: "text/plain" });
	const file = URL.createObjectURL(blob);
	const link = document.createElement("a");
	if (sendToMail) {
		sendMail(email, file);
	}
	link.download = "cover-letter-txt";
	link.href = file;
	link.click();
};
