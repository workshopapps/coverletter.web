
const ContactValidation = require("../utils/contact");
const sendEmail = require("../utils/sendEmail");
const { BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const contact = async (req, res) => {
  res.send("hello")

};
module.exports = { contact };
