const ContactValidation = (
	fullName,
	userEmail,
	phone,
	subject,
	description
) => {
	const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const phoneRegex =/^(?:(?:(?:\+?234(?:h1)?|01)h*)?(?:\(\d{3}\)|\d{3})|\d{4})(?:\W*\d{3})?\W*\d{4}$/;

	let result;
	if (!userEmail || !fullName || !phone  || !subject || !description) {
		result = "All input are required";
	} else 
    {
        if (phone.toString().match(phoneRegex)) {
            result = "Invaild Phone Number";
        } else {
            
        }if (!userEmail.match(emailRegex)) {
            result = "Invaild Email entered";
        } 
    }
  return result;
};

module.exports = { ContactValidation };
