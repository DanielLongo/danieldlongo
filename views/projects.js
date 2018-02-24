import React, {Component} from 'react';
import { Card, Col, Row } from 'antd';
//project = {str projectName, str info,str(image adress) background,int id(number for link)}
const project1 = {projectName:"Test", info:"testing the cards", id:"0" };
class Projects extends Component {
	constrctor() {
		this.projectCards = {}
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
	renderProjectCards() {
		let projectCards =  (
			<Row type="flex">
				{this.state.projects.map((project, index) => {
					let cur_projectName = project["projectName"]
					let cur_info = project["info"]
					let cur_id = project["id"]
					// console.log(cur_info)
					// console.log(cur_id)
					// console.log(cur_projectName)
					return (
						<div key={index}>
							<Card key={index} title={cur_projectName}>
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
			<div>
				<h2> projects </h2>
				{this.projectCards}
			</div>
		)
	}
}

{ /*<Card key={index} title={cur_projectName}>
								{cur_info}
							</Card> */}

export default Projects;