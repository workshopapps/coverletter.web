const ContactValidation = (
	fullName,
	userEmail,
	phone,
	subject,
	description
) => {
	const emailRegex = "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/";
	const phoneRegex =
		"/^+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}$/";

	let result;
	if (!userEmail || !fullName || !phone || !subject || !description) {
		result = "All input are required";
	}
	if (!phoneRegex.test(phone.toString())) {
		result = "Invaild Phone Number";
	}

	if (!emailRegex.test(userEmail)) {
		result = "Invaild Email entered";
	}
	return result;
};
module.exports = { ContactValidation };
