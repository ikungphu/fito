//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema 
var textSchema = new mongoose.Schema({
	title: String,
	value: String
});
var shoeLifeSchema = new mongoose.Schema({
	remaining: [textSchema],
	distance: [textSchema],
	days: [textSchema],
	rate: [textSchema], 
	footstrike: String,
	pressure: String,
	pronation: String
});

var diagnosticsSchema = new mongoose.Schema({
	arch: [textSchema],
	dimensions: [textSchema],
	analysis: [textSchema],
	pronation: [textSchema],
	diagnosis: [textSchema],
	diagnosisDimensions: String 
});

var dashboardSchema = new mongoose.Schema({
	steps: String,
	fitment: String,
	distance: String,
	rate: String,
	pronation: String,
	recentActivity: String,
	footStrike: String,
	pressureOutput: String,
	fitmentRating: String
});

var userSchema = new mongoose.Schema({
	username: String,
	password: String,
	email: String,
	status: String,
	shoe: String,
	steps: [String],
	dashboard: [dashboardSchema],
	shoeLife: [shoeLifeSchema],
	diagnostics: [diagnosticsSchema]
});

//Return model
module.exports = restful.model('Users', userSchema);
