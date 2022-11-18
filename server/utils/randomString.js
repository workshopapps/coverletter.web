// Random string takes a number parameter to know the length of strings to generate
function randomString(num) {
	const len = num;
	let characters = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
	let token = "";
	for (let i = 0; i < len; i++) {
		var char = Math.floor(Math.random() * characters.length);
		token += characters[char];
	}
	return token;
}

module.exports = { randomString };
