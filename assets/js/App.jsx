require('../css/style.css');
var React = require('react');
// var Topics = require('./Topics'); //render today's topic
var Welcome = require('./Welcome');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>4Bars</h1>
        <Welcome />
        <RouteHandler/>
      </div>
    )
  }
});


module.exports = App;