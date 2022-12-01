const express = require("express");
const router = express.Router();
const passport = require('passport')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/authentication')
const {
	register,
	updatePassword,
	forgotPassword,
	verify,
	protect,
	login,
	logout,
	getUserDetails,
	validateOTP,
	resetPassword,
} = require("../controllers/authController");

//Add your routes here
router.post("/signup", register);
router.post("/verify", verify);
router.post("/login", login);
router.post("/logout", auth, logout);
router.post("/dashboard", getUserDetails);
router.post("/forgotPassword", forgotPassword);

router.post("/validateOTP", validateOTP);
//GOOGLE auth routes
router.get('/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: 'coverly.hng.tech/signin' }),
  function(req, res) {
    const user = req.user
    const token =  jwt.sign({googleID:user._id,name:user.name, email:user.email},process.env.JWT_SECRET,{expiresIn: "2h"})
    
   return res.status(200).json({user,token});
  });


// All After login routes goes below PROTECT ROUTE
router.use(protect);
router.post("/resetPassword", resetPassword);
router.put("/updatePassword", updatePassword);
// router.post('/resetPassword', resetPassword)

module.exports = router;
