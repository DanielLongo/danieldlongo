import React, {Component} from 'react';
import ScrollableAnchor from "react-scrollable-anchor"
import { configureAnchors } from "react-scrollable-anchor"
import { removeHash } from 'react-scrollable-anchor'
configureAnchors({offset: -45, scrollDuration: 500})

class Visuals extends Component {
	render() {
		return(
			<ScrollableAnchor id={"visuals"}>
			<div className="mainView">
				<h2> Visuals </h2>
			</div>
			</ScrollableAnchor>

		)
	}
}

export default Visuals;