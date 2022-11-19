const GoogleStrategy = require('passport-google-oauth20').Strategy
require("dotenv").config();
const User = require('../models/User')

module.exports = function (passport) {
 passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
 },
  async (accessToken, refreshToken, profile, email, done) => {
   const newUser = {
    name: profile.displayName,
    email: profile.emails[0].value
   }
   try {
    let user = await User.findOne({ email })
    if (user) {
     done(null, user)
    } else {
     user = await User.create(newUser)
     done(null, user)
    }
   } catch (err) {
    console.error(err)
   }
  }
 )
 )
 passport.serializeUser((user, done) => {
  done(null, user.id)
 })
 passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(err, user))
 })
}