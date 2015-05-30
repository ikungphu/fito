//ROUTE : LOGIN

module.exports = function() {

	//Dependencies
	var express = require('express');
	var app = express();
	var passport = require('passport');
	var localStrategy = require('passport-local').Strategy;

	app.post("/", function(req, res) {
		req.logOut();
		res.send(200);
	});

	return app;

}();
