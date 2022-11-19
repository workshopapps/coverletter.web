const express = require("express");
const router = express.Router();
const passport = require('passport')
const { register } = require("../controllers/authController");


//Add your routes here
router.post("/signup", register);

router.get('/google', passport.authenticate('google', {
 scope: ['profile', 'email']
})
)


router.get('/google/callback', passport.authenticate('google', {
 failureRedirect: `${process.env.CLIENT_URL}/auth`
}),
 function (req, res) {
  res.status(200).json({ user: req.user })
 })

module.exports = router;
