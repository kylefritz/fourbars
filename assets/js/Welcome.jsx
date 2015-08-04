var React = require('react');
var Topics = require('./Topics');

var Welcome = React.createClass({
	getInitialState: function(){
		return {
			user: "",
			rhymes: ""
		}
	},
	componentDidMount: function(){
		fetch('/user')
		.then(function(d){ return d.json()})
		.then(function(data){
			this.setState({user: data.user});
		}.bind(this));
	},
	render: function(){

		return(<div>
				<h3>Welcome, {this.state.user}! </h3>
				<Topics />
					<form>
						<textarea
							rows="4"
							placeholder="Spit fire"
							value={this.state.rhymes}
							onChange={this.handleInput}
							>
						</textarea>

						<hr/>
						
						<button
							type="submit"
							onSubmit={this.handleSubmit}
							className="btn btn-primary"
							>
							Spit it
						</button>
					</form>
				</div>
			)
	},
	handleInput: function(event){
		this.setState({rhymes: event.target.value})
	},
	handleSubmit: function(){

	}
});

module.exports = Welcome;