const bcrypt = require("bcryptjs")

module.exports = async function (password) {
	const salt = await bcrypt.genSalt(10);
	const hashed =  await bcrypt.hash(password, salt);
    return hashed;
}