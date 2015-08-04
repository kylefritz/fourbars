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
		fetch('/topics', {
		 headers: {
	    'Accept': 'application/json',
	    'Content-Type': 'application/json'
	  	}
		}).then((d) => d.json()).then((topics) => {
			this.setState({topics: topics});
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
