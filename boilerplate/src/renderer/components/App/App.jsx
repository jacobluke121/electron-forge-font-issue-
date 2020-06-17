import React, {Component} from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

	render() {
		return (
			<div>
				<p className="san-serif">This is supposed to be Calibril Light in Production but it's not...</p>
				<p className="san-serif">however, when you run 'yarn start' its the correct font-family</p>
				<p className="san-serif">When in production if you look in the dev console tools, you can see that the font family is there under resources...</p>
			</div>)
	}
}

export default App;
