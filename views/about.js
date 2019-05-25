import React, {Component} from 'react';
import ScrollableAnchor from "react-scrollable-anchor"
import { configureAnchors } from "react-scrollable-anchor"
import { Button, Radio, Icon } from 'antd';
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
					<img ALIGN="right" HSPACE="50" VSPACE="0"className="aboutImage" src="https://avatars2.githubusercontent.com/u/16641213?s=460&v=4"/>
					<div className="lilIndent aboutText">
						<p> Hello, </p>
						<p>I'm <b> Daniel Longo</b>, a sophomore at Woodside High School concurrently enrolled at Cañada Community college.
					Outside of school, I enjoy running cross country and track.
					</p>
					<p>
					I also like to code. In particular, I enjoy analyizing datasets and creating machine learning models.
						Over the past four years, I've worked with datasets from a variety of domains. These include trading data (scraped from exchange websites), medical datasets, image databases, kaggle datasets, and more.
					</p>
					<p>
					Some languages I am most familiar with are <b> Python, R, C++, Javascript, Swift, Java, and HTML & CSS</b>.
					</p>
					<p>
					Some tools I use most frequently are <b> React, Tensorflow, PyTorch, R-Studio, Amazon EC2, Amazon S3, and Git (<a href="https://github.com/DanielLongo"> Github://DanielLongo</a>)</b>.
					</p>
					<p>
					Below are some of the projects and data visualizations I have been working on.
					</p>
					</div>
					<a href="Resume (1).pdf" download="DanielLongo">
					<Button type="primary" icon="download" size={"Large"}>
						Download Resume
					</Button>
				</a>
				</div>
			</ScrollableAnchor>
			</div>
			</Row>


		)
	}
}

export default About;