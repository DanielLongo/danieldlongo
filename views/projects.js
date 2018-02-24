import React, {Component} from 'react';
import { Card, Col, Row } from 'antd';
import ScrollableAnchor from "react-scrollable-anchor"
import { configureAnchors } from "react-scrollable-anchor"
configureAnchors({offset: -45, scrollDuration: 500})
//project = {str projectName, str info,str(image adress) background,int id(number for link)}
const project1 = {projectName:"Test", info:"testing the cards", id:"0" };
class Projects extends Component {
	constrctor() {
	}

	state = {
		projects : [project1, project1, project1],
		cardsPerRow : 3,
	}

	componentWillMount() {
		console.log("cards here a :")
		console.log(this.projectCards)
		this.projectCards = this.renderProjectCards()
		console.log("cards here b:")
		console.log(this.projectCards)
	}
	// renderProjectCards() {
	// 	let projectCards =  (
	// 		<Row type="flex" gutter={10}>
	// 			{this.state.projects.map((project, index) => {
	// 				let cur_projectName = project["projectName"]
	// 				let cur_info = project["info"]
	// 				let cur_id = project["id"];
	// 				if ((index + 1) > this.state.cardsPerRow) {
	// 					return;
	// 				}
	// 				return (
	// 					<div key={index}>
	// 						<Col key={index} span={20}>
	// 						<Card key={index} title={cur_projectName}>
	// 							{cur_info}
	// 						</Card>
	// 						</Col>
	// 					</div>
	// 				);
	// 			})}
	// 		</Row>
	// 	)
	// 	return projectCards;
	// }

	renderProjectCards() {
		let projectCards =  (
			<Row type="flex" gutter={10}>
				{this.state.projects.map((project, index) => {
					let cur_projectName = project["projectName"]
					let cur_info = project["info"]
					let cur_id = project["id"];
					if ((index + 1) > this.state.cardsPerRow) {
						return;
					}
					return (
						<div key={index}>
							<Card style={{width:250,height:200}}className="projectCard" key={index} title={cur_projectName}>
								{cur_info}
							</Card>
						</div>
					);
				})}
			</Row>
		)
		return projectCards;
	}


	render() {
		console.log("cards here c:")
		console.log(this.projectCards)
		return(
			<ScrollableAnchor id={"projects"}>
			<div className="mainView">
				<h2> Projects </h2>
				{this.projectCards}
			</div>
			</ScrollableAnchor>
		)
	}
}

{ /*<Card key={index} title={cur_projectName}>
								{cur_info}
							</Card> */}

export default Projects;