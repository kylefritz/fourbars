var React = require('react');
var Topics = require('./Topics');

var Welcome = React.createClass({
	getInitialState: function(){
		return {
			user: "",
			topic: ""
		}
	},
	componentDidMount: function(){
		fetch('/user')
		.then(function(data){
			console.log(data.body);
			this.setState({user: data.user});
		}.bind(this));
	},
	render: function(){
		console.log(this.state);
		return(<div>
				<div>Welcome, {this.state.user}! </div>
				<Topics />
					<br/>
					<form>
						<textarea rows="4" placeholder="Spit fire"> </textarea>
						<button type="submit" class="btn btn-primary">Spit it</button>
					</form>
				</div>
			)
	}
});

module.exports = Welcome;