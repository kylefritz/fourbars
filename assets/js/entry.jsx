require('../css/style.css');
var React = require('react');
var Topics = require('./Topics') //render today's topic

var App = React.createClass({
	getInitialState: function(){
		return {
			user: {},
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
		return(	<div>
					<div>Welcome, {this.state}!</div>
					<Topics />
					<br/>
					<input type="text"> </input>
				</div>
			)
	}
})

window.onload = function(){
	React.render(<App />, document.getElementById("content"));
}