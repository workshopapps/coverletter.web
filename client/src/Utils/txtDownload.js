export const convertToTxt = async () => {
	const html = document.getElementById("coverletter-target").innerText;
	const blob = new Blob([html], { type: "text/plain" });
	const file = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.download = "cover-letter-txt";
	link.href = file;
	link.click();
};
