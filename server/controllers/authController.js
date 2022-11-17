const User = require('../models/User')
const jwt = require('jsonwebtoken')
const UnauthenticatedError = require('../errors/unauthenticated')




//Sign up endpoint
exports.signup = async (req,res,next)=>{
    try {
        const newUser = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            passwordConfirm:req.body.passwordConfirm

        })
        const token = newUser.createJWT(newUser._id, newUser.name) //assigning secret token to a new user

       return  res.status(201).json({
            status:'success',
            token,
            data:{
                user:newUser
            }
        })
    } catch (error) {
        return next(new UnauthenticatedError(`${error.message}`))
    }
}

//Login endpoint
exports.login= async (req,res,next)=>{

    try {
        //get the user email and password
    const{email, password}= req.body
    if(!email || !password){
        return next (new UnauthenticatedError('Please provide email and password'))
    }

    // checking if user exist and if password is correct
    const user = await User.findOne({email}).select('+password')

if(!user || !await user.comparePassword(password, user.password)){
    return next(new UnauthenticatedError("Incorrect email or password"))
}
// sending response
const token = user.createJWT(user._id, user.name) //assigning secret token to a new login

    res.status(200).json({
        status:'success',
        token
    })
    } catch (error) {
        return next(new UnauthenticatedError(`${error.message}`))
    }
}