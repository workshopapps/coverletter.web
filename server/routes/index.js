const express = require('express')
const auth = require('../controllers/auth')
const router = express.Router()

//Add your routes here
router.post('/forgotPassword', auth.forgotPassword);
router.post('/resetPassword', auth.resetPassword);

module.exports = router

