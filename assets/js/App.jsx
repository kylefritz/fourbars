require('../css/style.css');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Header = require('./Header');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var App = React.createClass({
  render: function() {
    return (
    	<div>
      	<Header />
        <RouteHandler/>
      </div>
    )
  }
});

module.exports = App;