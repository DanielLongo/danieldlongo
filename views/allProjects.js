import React, {Component} from 'react';
import { Modal, Button } from 'antd';
import { Card, Col, Row } from 'antd';

class AllProjects extends Component {
	constructor(props) {
		super(props)
		this.updateShowAll = props.updateShowAll
		this.projects = props.projects
		// this.projects = projects;
	}

	componentWillMount() {
		console.log(this.projects)
		this.projectCards = this.renderProjectCards()
	}

	state = {
		projectCards : null,
	}

	handleCancel = () => {
		this.updateShowAll(false)
	}
	renderProjectCards = () => {
		let projectCards =  (
			<Row style={{marginLeft:"1%"}} type="flex" gutter={10}>
				{this.projects.map((project, index) => {
					let cur_projectName = project["projectName"]
					let cur_info = project["info"];
					let cur_url = project["url"];
					let cur_catagory = project["catagory"]
					let cur_img = project["img"]
					return (
						<div key={index}>
					{/* for horizontal flip flip-container vertical*/}
						<div class="flip-container horizontal" ontouchstart="this.classList.toggle('hover');">
							<div class="flipper">
								<div class="front">

									<Card className="projectCard" key={index} title={cur_projectName}
									extra={cur_catagory}
									cover= {<img alt="example" className="projectCardImage" src={cur_img}/>}
									>
									</Card>

								</div>
								<div class="back">
									<a href={cur_url}>
									<Card className="projectCard" key={index}>
										<p className="projectCardDescription"> {cur_info} </p>
									</Card>
									</a>
								</div>
							</div>
						</div>
						</div>
					);
				})}
			</Row>
		)
		return projectCards
	}

	render() {
		return(
			<div>
			<Modal
			visible={true}
			title="All Projects"
			footer={null}
			onCancel={this.handleCancel}>
			{this.projectCards}
			</Modal>
			</div>


		)
	}
}

export default AllProjects;