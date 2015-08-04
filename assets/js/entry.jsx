// require('../css/style.css');
var React = require('react');
// // var Topics = require('./Topics'); //render today's topic
// var Welcome = require('./Welcome');
 var Router = require('react-router');
// var Route = Router.Route;
// var App = require('./App');

// // declare our routes and their hierarchy

// var routes = (
//   <Route path ="/" handler={App}>
//     // <Route path="/" handler={Welcome}/>
//     <Route path="topics" handler={require('./Topics')}/>
//   </Route>
// );

var routes = require('./routes');
// var RouteHandler = Router.RouteHandler;

// var App = React.createClass({
//   render () {
//     return (
//       <div>
//         <h1>App</h1>
//         <Welcome />
//         <RouteHandler/>
//       </div>
//     )
//   }
// });

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});
