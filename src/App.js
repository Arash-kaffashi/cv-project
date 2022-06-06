import { Component } from "react";

import "./styles/index.css";
import General from "./components/General";
import Education from "./components/Education";
import Work from "./components/Work";

class App extends Component {
	render() {
		return (
			<div className="App">
				<General />
				<Education />
				<Work />
			</div>
		);
	}
}

export default App;
