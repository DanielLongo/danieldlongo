import React, {Component} from 'react';
import ScrollableAnchor from "react-scrollable-anchor"
import { configureAnchors } from "react-scrollable-anchor"
configureAnchors({offset: -45, scrollDuration: 500})

class About extends Component {
	render() {
		return(
			<ScrollableAnchor id={"about"}>
				<div className="mainView">
					<h2> About </h2>
					<p class="indent"> Hello, <p/> my name is Daniel Longo...</p>
				</div>
			</ScrollableAnchor>


		)
	}
}

export default About;