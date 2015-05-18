//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema 
var userSchema = new mongoose.Schema({
	username: String,
	password: String,
	email: String,
	shoe: String,
	steps: [String],
	pressure: [String]


});

//Return model
module.exports = restful.model('Users', userSchema);
