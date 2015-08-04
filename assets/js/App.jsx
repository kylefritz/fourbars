require('../css/style.css');
var React = require('react');
// var Topics = require('./Topics'); //render today's topic
var Welcome = require('./Welcome');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render () {
    return (
      <div>
        <h1>App</h1>
        <Welcome />
        <RouteHandler/>
      </div>
    )
  }
});


module.exports = App;