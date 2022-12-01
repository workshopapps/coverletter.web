export const addUserToLocalStorage = (user) => {
	localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
	localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
	const result = localStorage.getItem("user");
	const user = result ? JSON.parse(result) : false;
	return user;
};

export const addEmailToLocalStorage = (email) => {
	localStorage.setItem("email", JSON.stringify(email));
};
export const getEmailFromLocalStorage = () => {
	const result = localStorage.getItem("email");
	const email = result ? JSON.parse(result) : false;
	return email;
};
export const removeEmailFromLocalStorage = () => {
	localStorage.removeItem("email");
};
