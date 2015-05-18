//Dependencies
var express = require('express');
var router = express.Router();

//Models
var user = require('../models/userModel.js');

//Routes

user.methods(['get', 'put', 'post', 'delete']);
user.register(router, '/users');

//Return Router
module.exports = router;