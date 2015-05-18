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

/*
app.use(session({ secret: 'Fito is the best app ever'}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
*/

//Models
var users = require('./models/userModel');

//Views
app.use(express.static(__dirname + "/"));

//Routes
app.use('/api', require('./routes/api'));
app.use('/users', require('./routes/users'));
app.use('/login', require('./routes/login'));

//Start Server
app.listen(8080);
console.log('API is running on port 3000');


process.on('SIGTERM', function() {
	console.log("Shutting down server");
	app.close();
});