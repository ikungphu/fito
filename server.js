//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//MongoDB
mongoose.connect('mongodb://localhost/users');

//Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Views
app.use(express.static(__dirname + "/"));

//Routes
app.use('/users', require('./routes/users'));

//Start Server
app.listen(8080);
console.log('API is running on port 3000');
