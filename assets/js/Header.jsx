
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({

	render: function(){
		return (
		<div>
	      	<nav className="navbar navbar-default header">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						<span>4B</span><span style={{color: 'red'}}>ars</span>
					</Link>
					<ul className="nav navbar-nav navbar-right">
						<Link to="/topics"><li><a>Contribute</a></li>  </Link>
						<Link to="/browse"><li><a>Inspiration </a></li> </Link>	
						<Link to="/"><li><a>Create </a></li> </Link>
					</ul>
				</div>
			</nav>
		</div>
		)}
	});
module.exports = Header;