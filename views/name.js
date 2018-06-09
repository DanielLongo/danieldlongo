import React, {Component} from 'react';
import ScrollableAnchor from "react-scrollable-anchor"
import {Icon} from "antd";
// 								<p style={{fontSize: 60, fontWeight: "bold" }}>&#8675;</p>
class Name extends Component {
	render() {
		return(
			<ScrollableAnchor id={"name"}>
			<div>
				<div class="container">
					<img class="fullscreen" src="https://images.pexels.com/photos/355747/pexels-photo-355747.jpeg?cs=srgb&dl=adventure-alpine-background-355747.jpg&fm=jpg"/>
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
							<Icon style={{fontSize: 40, fontWeight: "bold", color:"black" }} type="down" />
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