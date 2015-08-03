require('../css/style.css'); //ToDo: needs own CSS?
var React = require('react');


var Topics = React.createClass({
	componentDidMount: function(){
		var _this = this;
		fetch('/entries').then(function(d){ return d.json()}).then(function(data){
			_this.setState({entries: data.entries});


		});
	},
	render: function(){
		console.log(this.state);
		return(<div>
				<div>Welcome, {this.state}!</div>
				<Topics />
				<Entry /> //add input box for user entry's

				</div>
			)
	}
})


module.exports = Topics;