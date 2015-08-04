require('../css/style.css'); //ToDo: needs own CSS?
var React = require('react');


var Topics = React.createClass({
	componentDidMount: function(){
		fetch('/topics').then(function(d){ return d.json()}).then(function(data){
			this.setState({topics: data.entries});
		}.bind(this));
	},
	render: function(){
		return(<div>
						<div>Topics!!, {this.state}!</div>
				</div>
			)
	}
})


module.exports = Topics;
