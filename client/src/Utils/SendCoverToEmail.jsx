import axios from "axios";
const sendToMail = async (email, file) => {
	if (email) {
		const formData = new FormData();
		formData.append("file", file);
		formData.append("email", email);
		try {
			const res = await axios.post(
				`https://api.coverly.hng.tech/api/v1/sendCoverLetter`,
				formData
			);
		} catch (ex) {
			console.log(ex);
		}
	}
};

export default sendToMail;
