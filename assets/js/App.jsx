require('../css/style.css');
var React = require('react');
var Welcome = require('./Welcome');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var App = React.createClass({
  render: function() {
    return (
      <div>
      	<nav className="navbar navbar-default header">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					<span>4B</span><span style={{color: 'red'}}>ars</span>
				</Link>
				<ul className="nav navbar-nav navbar-right">
					<li><a>Contribute </a></li> 
					<li><a>Inspire </a></li>		
					<li><a>Create </a></li>		
				</ul>
			</div>
		</nav>

        <Welcome />
        <RouteHandler/>
      </div>
    )
  }
});


module.exports = App;