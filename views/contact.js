import React, {Component} from 'react';
import {Button, Icon} from 'antd';
import '../App.css'
import ScrollableAnchor from "react-scrollable-anchor"
import { configureAnchors } from "react-scrollable-anchor"
import { removeHash } from 'react-scrollable-anchor'
import ScriptTag from 'react-script-tag';
configureAnchors({offset: -45, scrollDuration: 500})
removeHash()
class Contact extends Component {
	render() {
		return(
			<div className="indent">
			<ScrollableAnchor id={"contact"}>
			<div style={{marginBottom:"10%"}} className="mainView">
				<h1 className="sectionTitleText"> Let's Get in Touch </h1>
				<div style={{marginLeft:"1%"}}>
					<Icon className="contactIcon" type="mail" /><a className="contactText" href="mailto:Danieldominiclongo@gmail.com"> Danieldominiclongo@gmail.com</a>
					<p/>
					<Icon className="contactIcon" type="mobile" /><a className="contactText" href="tel:+1-650-546-1126"> 650-546-1126</a>
					<p/>
					<Icon className="contactIcon" type="global" /><a className="contactText" href="https://www.google.com/maps/place/Menlo+Park/@37.4541977,-122.1841374,17z/data=!3m1!4b1!4m5!3m4!1s0x808fa4ae453a8637:0xa0d39978eada388a!8m2!3d37.4541935!4d-122.1819487"> Menlo Park, CA, USA</a>
					<p/>
					<a href="Resume (1).pdf" download="DanielLongo">
						<Button type="primary" icon="download" size={"Large"}>
							Download Resume
						</Button>
					</a>
				</div>
			</div>
			</ScrollableAnchor>
			</div>
		)
	}
}
//github card for future use
// 				<div class="github-card" data-github="DanielLongo" data-width="400" data-height="" data-theme="default"></div>
// <ScriptTag src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></ScriptTag>
export default Contact;