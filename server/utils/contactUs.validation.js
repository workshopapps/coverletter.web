const ContactValidation = (
	fullName,
	userEmail,
	phone,
	subject,
	description
) => {
	const emailRegex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	// const phoneRegex =
	// 	/((^090)([23589]))|((^070)([1-9]))|((^080)([2-9]))|((^081)([0-9]))(\d{7})/;

	let result;
	if (!userEmail || !fullName || !phone || !subject || !description) {
		result = "All input are required";
	} else if (!userEmail.match(emailRegex)) {
		result = "Invalid Email entered";
	}

	return result;
};

module.exports = { ContactValidation };
