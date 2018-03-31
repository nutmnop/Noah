var mongoose = require('mongoose');

module.exports.connect = function() {
	mongoose.connect('mongodb://user:12345@ds231199.mlab.com:31199/noah');
	var db = mongoose.connection;
	db.on("error", console.error.bind(console, "connection error"));
	db.once("open", function(callback){
	  console.log("Connection Succeeded");
	});
	return db;
}