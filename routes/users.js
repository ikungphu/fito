module.exports = function()	{
	var express = require('express');
  	var app = express();

  	//Model
  	var user = require('../models/userModel');

	app.get('/', function(req, res)	{
		user.find({}, function(err, data) {
			console.log(err, data, data.length);

			var userData = [data.length];
			for(i=0; i < data.length; i++) {
				userData[i] = data[i];
			}
			res.json(userData);
		})
  		//res.send("Test test");
	});



  return app;
}();