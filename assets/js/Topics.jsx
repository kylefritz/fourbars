require('../css/style.css'); //ToDo: needs own CSS?
var React = require('react');
var Topics = React.createClass({

	getInitialState: function(){
		return {
			topic: ""
		}
	},
	componentDidMount: function(){
		fetch('/topics')
		.then(function(d){ return d.json()})
		.then(function(data){
			this.setState({topic: data.topic});

		}.bind(this));
	},
	render: function(){
		return(<div>

						<h3>Topic Today</h3>
						<h4>{this.state.topic}</h4>

				</div>
			)
	}
});

module.exports = Topics;
