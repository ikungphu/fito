module.exports = function(){
  var express = require('express');
  var app = express();


  app.get('/:id', function(req, res){
  	console.log('test');
  });

  return app;
}();