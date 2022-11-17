const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");

const forgotPassword = async (req, res, next) => {
 try {
  const { email } = req.body
  if (!email) {
   return res.status(400).json({
    message: "Please enter an email"
   })
  }

  const user = await User.findOne({ email })

  if (!user) {
   return res.status(400).json({
    message: "This email does not exist in our database"
   })
  }

  const otp = user.createPasswordResetToken();

  const message = `You are getting this otp ${otp} because you request to change your password. If you didn't please ignore`

  await sendEmail({ email: user.email, subject: 'Password Reset', message })

  await user.save();


 } catch (error) {
  res.status(400).json({
   success: false,
   error: error.message
  })
 }
}



module.exports = {
 forgotPassword
};