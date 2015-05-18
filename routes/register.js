//ROUTE : REGISTER

module.exports = function() {

	//Dependencies
	var express = require('express');
	var app = express();
	var passport = require('passport');
	var localStrategy = require('passport-local').Strategy;

	//Model
	var userSchema = require('../models/userModel');

	app.post('/', function (req, res) {
		console.log(req.body);

		userSchema.findOne({ username : req.body.username}, function(err, user) {
			if (user) {
				console.log("Duplicate user");
				res.send("User exists already");
				return;
			} else {
				console.log("Creating new user");
				var newUser = new userSchema(req.body);
				newUser.save(function(err, user) {
					console.log("Saved user");
					req.login(user, function(err) {
						if (err) {
							return next(err);
						}
						res.json(user);
					});
				});
			}
		});
	});
	

	return app;

}();