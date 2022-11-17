const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

//Add your routes here
router.post('/signup', authController.signup) //signup endpoint for user
router.post('/login', authController.login)// login endpoint for user

module.exports = router