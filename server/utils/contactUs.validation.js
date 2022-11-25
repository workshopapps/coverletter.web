const ContactValidation = (
	userEmail,
	fullName,
	phone,
	subject,
	description
) => {
	const emailRegex = "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/";
	let result;
	if (!userEmail || !fullName || !phone || !subject || !description) {
		result = console.log("All input are required");
	} else {
		if (typeof phone !== "number") {
			result = console.log("Invaild Phone Number");
		} else {
			if (!emailRegex.test(userEmail)) {
				result = console.log("Invaild Email entered");
			}
		}
	}
};

module.exports = { ContactValidation };
