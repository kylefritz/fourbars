
require('../css/style.css');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var App = require('./App');
var Topics = require('./Topics');
var Welcome = require('./Welcome');
var DefaultRoute = Router.DefaultRoute;
var TopicList = require('./TopicList');
var Browse = require('./Browse');

// declare our routes and their hierarchy

module.exports = ( 
	<Route path ="/" handler={App}>
		<DefaultRoute handler={Welcome} />
		<Route path="topics" handler={TopicList}/>
		<Route path="browse" handler={Browse} />
		
  	</Route>
);

