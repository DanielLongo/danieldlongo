import React, {Component} from 'react';
import ScrollableAnchor from "react-scrollable-anchor"
import { configureAnchors } from "react-scrollable-anchor"
import {Row} from 'antd'
configureAnchors({offset: -45, scrollDuration: 500})

class About extends Component {
	render() {
		return(
			<Row span={10} type="flex">
			<div className="indent">
			<ScrollableAnchor id={"about"}>
				<div className="mainView">
					<h1 className="sectionTitleText"> About </h1>
					<img ALIGN="right" HSPACE="50" VSPACE="0"className="aboutImage" src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/37953_1651837181038_5714193_n.jpg?oh=0d300dedd15259f9bdbe4378bc836bd0&oe=5B388265"/>
					<div className="lilIndent aboutText">
					<p> My name is <b> Daniel Longo </b> and I am a freshman at Woodisde High School concurrently enrolled at Cañada Community college. 
					Outside of school I enjoy running cross country and playing on my school's golf team. 
					</p>
					<p>
					I also like to code. In particular, I enjoy analyizing data sets and creating machine learning models. 
					Due to my interests in the financial sector, many of my projects below use financial data.
					</p>
					<p>
					Some languages I am most familiar with are <b> Python, R, C++, Javascript, and HTML & CSS</b>.
					</p>
					<p>
					Some tools I use are <b> React, Tensorflow, R-Studio, Amazon EC2, Amazon S3, and Git</b>.
					</p>
					<p>
					Below are some of the projects and data visualizations I have been working on
					</p>
					</div>
				</div>
			</ScrollableAnchor>
			</div>
			</Row>


		)
	}
}

export default About;