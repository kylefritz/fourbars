require('../css/style.css');
var React = require('react');

var TopicList = React.createClass({
	getInitialState: function(){
		return {
			topics: []
		}
	},
	componentDidMount: function(){
		fetch('/topic-list')
		.then(function(d){ return d.json()})
		.then(function(data){
			this.setState({topics: data.topics});
		}.bind(this));
	},
	render: function(){
		var list = this.state.topics.map(function(topic){
			return (<li className="list-group-item">
						{topic}
					</li>)
		});
		return(<div>
					<ul className="list=group">
						{list}
					</ul>
				</div>
			)
	}
});

module.exports = TopicList;
