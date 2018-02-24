import React, {Component} from 'react';
import ScrollableAnchor from "react-scrollable-anchor"
import {Icon} from "antd";
class Name extends Component {
	render() {
		return(
			<ScrollableAnchor id={"name"}>
			<div>
				<div class="container">
					<img class="fullscreen" src="https://images.unsplash.com/photo-1485801468070-3c1af624702e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=531533ce9d4d1b224f666c383a0447e7&auto=format&fit=crop&w=500&q=60"/>
					<div class="centered"> 
						<h2 class="nameText"> Daniel Longo </h2>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<a href="#about" className="nameArrow">
							<div className="bounce">
								<Icon type="down" />
							</div>
						</a>
					</div>
				</div>
			</div>
			</ScrollableAnchor>
		)
	}
}

export default Name;