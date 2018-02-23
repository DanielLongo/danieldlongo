// import React, {Component} from 'react';
// import { Card, Col, Row } from 'antd';
// //project = {str projectName, str info,str(image adress) background,int id(number for link)}
// const project1 = {projectName:"Test", info:"testing the cards", id:"0" };
// class Projects extends Component {
// 	state = {
// 		projects : [project1,project1,project1],
// 		cardsPerRow : 3,
// 	}

// 	componentDidMount() {
// 		this.projectCards = renderProjectCards
// 	}
// 	renderProjectCards() {
// 		let projectCards =  (
// 			<Row>
// 				{for (i = 0; i < this.state.cardsPerRow + 1 ; i++)  {
// 					let cur_project = this.state.projects[i]
// 					let cur_projectName = cur_project["projectName"]
// 					let cur_info = cur_project["info"]
// 					let cur_id = cur_project["id"]
// 					return (
// 						<Card key={cur_id} title={cur_projectName}>
// 							{cur_info}
// 						</Card>
// 					)
// 				}}
// 			</Row>
// 		)
// 		return projectCards;
// 	}

// 	render() {
// 		return(
// 			<div>
// 				<h2> projects </h2>
// 				{this.projectCards}
// 			</div>
// 		)
// 	}
// }

// export default Projects;