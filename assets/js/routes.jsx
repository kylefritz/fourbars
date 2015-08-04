
require('../css/style.css');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var App = require('./App');
var Topics = require('./Topics');

// declare our routes and their hierarchy

module.exports = ( 
	<Route path ="/" handler={App}>
		<Route path="Topics" handler={Topics} />
    
  	</Route>
);

