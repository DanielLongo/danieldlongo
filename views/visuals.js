import React, {Component} from 'react';
import ScrollableAnchor from "react-scrollable-anchor"
import { configureAnchors } from "react-scrollable-anchor"
import { Card, Col, Row } from 'antd'
configureAnchors({offset: -45, scrollDuration: 500})
const visual0 = {title:"India Startups",
img: "data:image/png;base64,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",
url:"#name"}
const visual1 = {title:"A visual",
img: "https://www.helpscout.net/images/blog/2016/jan/visual-communication.png",
url: "#name"}
class Visuals extends Component {

	state = {
		visuals : [visual0,visual1,visual1,visual1,visual1]
	}

	componentWillMount() {
		this.visualsCards = this.renderVisuals() 
	}

	renderVisuals() {
		let visuals = (
			<div>
			<Row type="flex" gutter={10}>
			{this.state.visuals.map((visual,index) => {
				let cur_title = visual["title"]
				let cur_img = visual["img"]
				let cur_url = visual["url"]
				console.log("cur img " + cur_img)
			return (
				<div key={index}>
					<a href={cur_url}>
					<Card 
					className="visualCard"
					key={index}
					title={cur_title}
					cover={<img className="visualCardImage" src={cur_img}/>}
					/>
					</a>
				</div>
			)
			})}
			</Row>
			</div>
		)
		return visuals
	}

	render() {
		return(
			<div className="indent">
			<ScrollableAnchor id={"visuals"}>
			<div className="mainView">
				<h1 className="sectionTitleText"> Visuals </h1>
				{this.visualsCards}
			</div>
			</ScrollableAnchor>
			</div>

		)
	}
}

export default Visuals;