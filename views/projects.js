import React, {Component} from 'react';
import { Card, Col, Row } from 'antd';
import ScrollableAnchor from "react-scrollable-anchor"
import { configureAnchors } from "react-scrollable-anchor"
import {Button} from 'antd';
import {Modal} from 'antd';
configureAnchors({offset: -45, scrollDuration: 500})
//project = {str projectName, str info,str(image adress) background,str url}
const project1 = {projectName:"Project Name", info:"a breif description...", url:"#name",catagory:"catagory" };
class Projects extends Component {
	constrctor() {
	}

	state = {
		projects : [project1, project1, project1,project1,project1,project1,project1],
		numCardsShow : 10,
	}

	componentWillMount() {
		console.log("cards here a :")
		console.log(this.projectCards)
		this.projectCards = this.renderProjectCards()
		console.log("cards here b:")
		console.log(this.projectCards)
	}
	renderProjectCards() {
		let projectCards =  (
			<Row style={{marginLeft:10}} type="flex" gutter={10}>
				{this.state.projects.map((project, index) => {
					let cur_projectName = project["projectName"]
					let cur_info = project["info"];
					let cur_url = project["url"];
					let cur_catagory = project["catagory"]
					if ((index) > this.state.numCardsShow) { //will display 1 less that numCardsShow b/c indexing, but will add extra card at end
						return;
					}
					return (
						<div key={index}>
					{/* for horizontal flip flip-container vertical*/}
						<div class="flip-container horizontal" ontouchstart="this.classList.toggle('hover');">
							<div class="flipper">
								<div class="front">

									<Card className="projectCard" key={index} title={cur_projectName}
									extra={cur_catagory}
									cover= {<img alt="example" className="projectCardImage" src="https://images.unsplash.com/photo-1505283884983-cf47b9e0f9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5c514001a3b6a6a18e6716dec11ad066&auto=format&fit=crop&w=1650&q=80" />}
									>
									</Card>

								</div>
								<div class="back">
									<a href={cur_url}>
									<Card className="projectCard" key={index}>
										{cur_info}
									</Card>
									</a>
								</div>
							</div>
						</div>
						</div>
					);
				})}
				<Card className="projectCard">
					{"see all"}
				</Card>
			</Row>
		)
		return projectCards;
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
	// 						<Card style={{width:250,height:200}} className="projectCard" key={index} title={cur_projectName}>
	// 							{cur_info}
	// 						</Card>
	// 					</div>
	// 				);
	// 			})}
	// 		</Row>
	// 	)
	// 	return projectCards;
	// }


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