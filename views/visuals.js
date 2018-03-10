import React, {Component} from 'react';
import ScrollableAnchor from "react-scrollable-anchor"
import { configureAnchors } from "react-scrollable-anchor"
configureAnchors({offset: -45, scrollDuration: 500})

class Visuals extends Component {
	render() {
		return(
			<div className="indent">
			<ScrollableAnchor id={"visuals"}>
			<div className="mainView">
				<h2> Visuals </h2>
			</div>
			</ScrollableAnchor>
			</div>

		)
	}
}

export default Visuals;