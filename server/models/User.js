const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    maxlength: 50,
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    unique:true,
    lowercase:true,
    validate:[validator.isEmail, 'Please provide a valid email'],
    // match: [
    //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //   'Please provide a valid email',
    // ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
    select:false
  },
  passwordConfirm:{
    type:String,
    required:[true, 'Please confirm password'],
    validate: {
      validator:function(pass){
        return pass === this.password;
      }, 
      message: "password didn't match"
    }
  }
})

UserSchema.pre('save', async function (next) {
  if(!this.isModified('password')) return next()
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  this.passwordConfirm=undefined
})

// creating json web token for a new user
UserSchema.methods.createJWT = function (id, name) {

  return jwt.sign(
    { userId: id, name: name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  )
}

// comparing password for login
UserSchema.methods.comparePassword = async function (canditatePassword, userPassword) {
  const isMatch = await bcrypt.compare(canditatePassword, userPassword)
  return isMatch
}

module.exports = mongoose.model('User', UserSchema)
