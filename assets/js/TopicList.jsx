require('../css/style.css');
var React = require('react');
var dbApi = require('./utils/dbApi');


var TopicList = React.createClass({
	getInitialState: function(){
		return {
			topics: []
		}
	},
	componentDidMount: function(){
		dbApi.retrieveTopics(function(topics){
			this.setState({topics: [topics]});
		})
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
// componentDidMount: function(){
// 		fetch('/topic-list')
// 		.then(function(d){ return d.json()})
// 		.then(function(data){
// 			this.setState({topics: data.topics});
// 		}.bind(this));
// 	},