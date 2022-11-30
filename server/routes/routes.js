const express = require('express');
const router = express.Router();
const controllers = require('../controllers/template')

//Add your routes here

//upload route
router.post('/uploadCV', controllers.uploadCV)

module.exports = router