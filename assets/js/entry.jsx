require('../css/style.css');
var React = require('react');
// var Topics = require('./Topics') //render today's topic

var Welcome = React.createClass({
	getInitialState: function(){
		return {
			user: {},
			topic: "Cool Winter Morning!"
		}
	},
	componentDidMount: function(){
		// var _this = this;
		fetch('/user')
		.then(function(d){ return d.json()})
		.then(function(data){
			this.setState({user: data});
		}.bind(this));
	},
	render: function(){
		console.log(this.state);
		return(<div>
				<div>Welcome, {this.state.user.name}!</div>
					{this.state.topic}
					<br/>

				</div>
			)
	}
})

var Router = require('react-router');
var Route = Router.Route;

// declare our routes and their hierarchy
var routes = (
  <Route handler={App}>
    <Route path="" handler={Welcome}/>
    <Route path="topics" handler={require('./Topics')}/>
  </Route>
);

var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render () {
    return (
      <div>
        <h1>App</h1>
        <RouteHandler/>
      </div>
    )
  }
});

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});
