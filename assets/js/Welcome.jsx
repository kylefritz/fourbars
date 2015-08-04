var React = require('react');
var Topics = require('./Topics');

var Welcome = React.createClass({
	getInitialState: function(){
		return {
			user: "ryan",
			topic: ""
		}
	},
	componentWillMount: function(){
		fetch('/user')
		.then(function(data){
			this.setState({user: data});
		}.bind(this));
	},
	render: function(){
		return(<div>
				<div>Welcome, {this.state}! </div>
				<Topics />
					<br/>
					<input type="text"> </input>
				</div>
			)
	}
});

module.exports = Welcome;