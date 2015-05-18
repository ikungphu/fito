//ROUTE : LOGIN

module.exports = function() {

	//Dependencies
	var express = require('express');
	var app = express();
	var passport = require('passport');
	var localStrategy = require('passport-local').Strategy;

	//Model
	var user = require('../models/userModel');

	//Passport
	passport.use(new localStrategy(
		function(username, password, done) 
		{
			user.findOne({username : username, password : password}, function(err, user) {
				if (user) {
					return done(null, user);
				}
				return done(null, false, {message: 'Unable to login'});
			});
		}
	));

	passport.serializeUser(function(user, done) {
		done(null, user);
	});

	passport.deserializeUser(function(user, done) {
		done(null, user);
	});

	app.post('/', passport.authenticate('local'), function (req, res) {
		res.send(req.isAuthenticated() ? req.user : '0');
	});

	app.get('/', function (req, res) {
		res.send(req.isAuthenticated() ? req.user : '0');
	});


	return app;

}();