require('../css/style.css'); //ToDo: needs own CSS?
var React = require('react');

var Topics = React.createClass({
	componentDidMount: function(){
		fetch('/topics').then(function(d){ return d.json()}).then(function(data){
			this.setState({topics: data.topic});
		}.bind(this));
	},
	render: function(){
		console.log(this.state);
		return(<div>
				{this.state}
				</div>
			)
	}
})


module.exports = Topics;