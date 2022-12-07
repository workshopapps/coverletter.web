const User = require("../models/User");
const { generateOTP } = require("../utils/generateOTP");
const { StatusCodes } = require("http-status-codes");
const {sendEmail, mailStyle} = require("../utils/sendEmail");

const otpGenerator = async function(req, res){
    const { email, type } = req.body;
    let confirmationCode = generateOTP(4);
    let update, user, message;
    switch (type) {
        case "verify":
            update = {confirmationCode}
            user = await User.findOneAndUpdate({ email:email },update,{new:true})
            if (!user){
                return res.status(StatusCodes.BAD_REQUEST).json("User Not Found")
            }
            message = mailStyle('Use the OTP below to verify your account.', confirmationCode)
            if(user){
                await sendEmail(
                    req.body.email,
                    "Verify email",
                    message
                    );
                return res.status(StatusCodes.OK).json("Kindly Check your email for the verifcation code")
                    
            }else{
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Oops! Something Wrong on Our End")
            }
            break;
        case "reset":
            update = {resetPasswordOtp}
            user = await User.findOneAndUpdate({ email:email },update,{new:true})
            if (!user){
                return res.status(StatusCodes.BAD_REQUEST).json("User Not Found")
            }
            message = mailStyle('Use the OTP below to verify your account.', confirmationCode)
            if(user){
                await sendEmail(
                    req.body.email,
                    "Verify email",
                    message
                    );
                return res.status(StatusCodes.OK).json("Kindly Check your email for the verifcation code")
                    
            }else{
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Oops! Something Wrong on Our End")
            }
            break;
        default:
            update = {confirmationCode}
            user = await User.findOneAndUpdate({ email:email },update,{new:true})
            if (!user){
                return res.status(StatusCodes.BAD_REQUEST).json("User Not Found")
            }
            message = mailStyle('Use the OTP below to verify your account.', confirmationCode)
            if(user){
                await sendEmail(
                    req.body.email,
                    "Verify email",
                    message
                    );
                return res.status(StatusCodes.OK).json("Kindly Check your email for the verifcation code")
                    
            }else{
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Oops! Something Wrong on Our End")
            }

    }

};
module.exports = {otpGenerator}