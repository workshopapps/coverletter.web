const User = require('../models/User')
const { StatusCodes } = require('http-status-codes');
const {randomString} = require('../utils/randomString')
const { BadRequestError } = require('../errors')
const sendEmail = require('../utils/sendEmail')
const crypto = require('crypto')


const register = async (req, res) => {
    const { email, name, password } = req.body;
    
    const oldUser = await User.findOne({ email });
   
    if (oldUser) {
      
      throw new BadRequestError('Email already exists');
    }
    let confirmationCode = randomString()
    console.log(confirmationCode)
   const user = new User({
      name,
      email,
      password,
      confirmationCode
  },)
  const url = `${process.env.BASE_URL}/auth/verify/${confirmationCode}`;
  await sendEmail(req.body.email,"Verify email",url)

   const savedUser = await user.save()
    const token = savedUser.createJWT() 
    
  
   
    res.status(StatusCodes.CREATED).json({ user: token });
  };


const forgotPassword = async (req, res, next) => {
    const user = await User.findOne({email: req.body.email})
    console.log(user)
    if(!user){
        console.log({"message": "Not found"})
        return next(new BadRequestError('There is no user with this email address.' ));
    }
    const resetToken = user.createResetToken();
    await user.save();

    resetUrl = `${process.env.BASE_URL}/api/v1/auth/resetPassword/${resetToken}`

    const message = `Please click the link below to rest your password: ${resetUrl}`

    try{
        await sendEmail({
        email: user.email,
        subject: 'Password Reset',
        url: message
        })
        res.status(200).json({
            status: "success",
            message: "Email Sent Successfully"
            })
    } catch(err){
        return next(new BadRequestError('Error Sending Email'))
    }

};


const resetPassword = async function(req, res, next) {
    const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');


    const user = await User.findOne({passwordResetToken: hashedToken, passwordResetExpires: {$gt: Date.now()}})

    if(!user) {
        return next(new BadRequestError('Token Expired'))
    }
    user.password = req.body.password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save()

    res.status(200).json({
        status: 'success'
    });
};

module.exports = {
    register, forgotPassword, resetPassword
  };