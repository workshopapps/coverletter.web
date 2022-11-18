const express = require('express')
const router = express.Router()
const passport = require('passport')
const {register,verify} = require('../controllers/auth')

//Add your routes here
router.post('/signup', register)
router.get('/verify/:confirmationCode',verify)

router.get('/google',
    passport.authenticate('google', { scope: ['profile','email'] })
    );




router.get('/google/callback',
    passport.authenticate('google', { failureRedirect:`${process.env.CLIENT_URL}/auth` }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.status(200).json(req.user);
    });

module.exports = router;
