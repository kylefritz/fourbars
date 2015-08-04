require('../css/style.css');
var React = require('react');
// var Topics = require('./Topics'); //render today's topic
var Welcome = require('./Welcome');
var Router = require('react-router');
var Route = Router.Route;
var App = require('./App');

// declare our routes and their hierarchy

module.exports = ( 
	<Route path ="/" handler={App}>
    	// <Route path="/" handler={Welcome}/>
    <Route path="topics" handler={require('./Topics')}/>
  </Route>
);