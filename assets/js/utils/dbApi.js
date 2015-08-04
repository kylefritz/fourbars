var dbConnect = require('./dbconnect');
var pg = require('pg');
module.exports = {
	savePost : function(post, cb){
		dbConnect(function(client, done){
			client.query(
        //insert post into table, 
        function(err, result) {
        done()
        	if (err) {
	          console.log(err)
	          throw(err)
        	}
       		 cb(result.rows[0]);
      		})
		});
	},
	retrieveTopics : function(cb){
		dbConnect(function(client, done){
			client.query(
				"SELECT topic FROM topics", function(err, result){
					if (err){
						console.log(err);
						throw(err);
					}
					cb(result.rows)
				}
			)
		});
	},
	togglePostProps : function(post, cb){
		dbConnect(function(client, done){
			client.query(
				//todo join users and post and +1 for props
				)
		});
	},
}