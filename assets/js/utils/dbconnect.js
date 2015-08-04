// var Fetch = require('whatwg-fetch');
var pg = require('pg');
var conString = process.env.DATABASE_URL || "postgres://localhost/fourbars";

module.exports = function(cb){
		pg.connect(conString, function(err, client, done) {
			if (err) {
				console.log(err);
				throw(err);
			}
			cb(client, done)
		})
}
