var dbConnect = require('./dbconnect');

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
	retrieveTopics : function(topic, cb){
		dbConnect(function(client, done){
			client.query(
				//select topic from table
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