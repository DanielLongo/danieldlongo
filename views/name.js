import React, {Component} from 'react';
import ScrollableAnchor from "react-scrollable-anchor"
import {Icon} from "antd";
class Name extends Component {
	render() {
		return(
			<ScrollableAnchor id={"name"}>
			<div>
				<div class="container">
					<img class="fullscreen" src="https://images.unsplash.com/photo-1478250242432-9381e12b763b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a5433befe8eb75c614a7010c8a9883fd&auto=format&fit=crop&w=1368&q=80"/>
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
								<Icon style={{fontSize: 30, fontWeight: "bold" }} type="down" />
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