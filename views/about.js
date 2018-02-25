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
					<p class="indent"> Hello, </p>
					<p class="indent">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas, nunc dictum maximus aliquet, ante magna ultricies nulla, non ultricies enim felis at turpis. Praesent congue molestie nunc, aliquam consectetur augue viverra a. Donec ultrices eu lectus vel laoreet. Phasellus ac mollis ex, eget bibendum augue. Pellentesque sem metus, lobortis vel ligula non, tempus ultricies urna. Pellentesque ut consectetur libero, vitae efficitur massa. Pellentesque a tempus enim. Fusce justo nibh, sodales id iaculis at, rhoncus ultrices lacus. Pellentesque nec nisl risus. Nulla facilisi. Morbi ex arcu, venenatis at felis vel, vestibulum mattis nibh. Nunc interdum suscipit dui sed faucibus. Suspendisse vel nunc quis elit facilisis eleifend eu sed justo. Quisque convallis, felis scelerisque vehicula fringilla, arcu mauris porttitor lorem, vitae tristique justo arcu a mi. Praesent non mi finibus, vulputate sem eu, ullamcorper dui. Integer ac imperdiet lacus, ut sollicitudin velit.
					</p>
				</div>
			</ScrollableAnchor>


		)
	}
}

export default About;