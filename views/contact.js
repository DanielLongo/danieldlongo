import React, {Component} from 'react';
import {Icon} from 'antd';
import '../App.css'
import ScrollableAnchor from "react-scrollable-anchor"
import { configureAnchors } from "react-scrollable-anchor"
import { removeHash } from 'react-scrollable-anchor'
configureAnchors({offset: -45, scrollDuration: 500})
removeHash()
class Contact extends Component {
	render() {
		return(
			<ScrollableAnchor id={"contact"}>
			<div style={{marginBottom:"100%"}} className="mainView">
				<h2> Let's Get in Touch </h2>
				<div style={{marginLeft:"1%"}}>
					<Icon type="mail" /><a href="mailto:Danieldominiclongo@gmail.com"> Danieldominiclongo@gmail.com</a>
					<p/>
					<Icon type="mobile" /><a href="tel:+1-650-546-1126"> 650-546-1126</a>
					<p/>
					<Icon type="global" /><a href="https://www.google.com/maps/place/Menlo+Park/@37.4541977,-122.1841374,17z/data=!3m1!4b1!4m5!3m4!1s0x808fa4ae453a8637:0xa0d39978eada388a!8m2!3d37.4541935!4d-122.1819487"> Menlo Park, CA, USA</a>
				</div>
			</div>
			</ScrollableAnchor>
		)
	}
}

export default Contact;