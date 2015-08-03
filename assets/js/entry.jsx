require('../css/style.css');
var React = require('react');
var Topics = require('./Topics') //render today's topic


var App = React.createClass({
	getInitialState: function(){
		return {
			user: {},
			topic: "Cool Winter Morning"
		}
	},
	componentDidMount: function(){
		// var _this = this;
		fetch('/user')
		.then(function(d){ return d.json()})
		.then(function(data){
			this.setState({user: data});
		}.bind(this));
	},
	render: function(){
		console.log(this.state);
		return(<div>
				<div>Welcome, {this.state.user.name}!</div>
					{this.state.topic}
					<br/>

				</div>
			)
	}
})


window.onload = function(){
	React.render(<App />, document.getElementById("content"));
}