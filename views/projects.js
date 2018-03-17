import React, {Component} from 'react';
import { Card, Col, Row } from 'antd';
import ScrollableAnchor from "react-scrollable-anchor"
import { configureAnchors } from "react-scrollable-anchor"
import {Button} from 'antd';
import {Modal} from 'antd';
import axios from 'axios'
import AllProjects from "./allProjects"
import HtmlComponent from "../components/htmlComponent"
// import test from "../pages/projects/testProject.txt"


configureAnchors({offset: -45, scrollDuration: 500})
//project = {str projectName, str info,str(image adress) background,str url}
const img = "https://images.unsplash.com/photo-1505283884983-cf47b9e0f9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5c514001a3b6a6a18e6716dec11ad066&auto=format&fit=crop&w=1650&q=80"
const project1 = {projectName:"Logistic Regression from Scratch", 
info:"Logistic regression using only numpy to identify cows.", url:"#name",catagory:"ML" ,img:
"https://images.unsplash.com/photo-1502590464431-3b66d77494d7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=464528617b90a6f30c1cbcd6db84d90b&auto=format&fit=crop&w=667&q=80"};

const project2 = {projectName:"Neural Net from Scratch", 
info:"A vanilla nerual net built entirely form scratch", url:"#name",catagory:"Deep Learning",
img:img };

const project3 = {projectName:"CNN from Scratch", 
info:"A CNN built from numpy that classifies the type of leaf", url:"#name",catagory:"Deep Learning",
img:"https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ba9893452f120b4af8ffe3b3f9475e7f&auto=format&fit=crop&w=750&q=80" };

const project4 = {projectName:"RNN Cryptocurrencey Predictor", 
info:"A RNN built using tensorflow that relates cryptocurrencey and predicts how they will move in the future", url:"#name",catagory:"Deep Learning",
img:"https://images.unsplash.com/photo-1519995451813-39e29e054914?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5c0478ad15d7b018f8bb59f644f17184&auto=format&fit=crop&w=750&q=80" };

const project5 = {projectName:"Lidar Object Detection", 
info:"A CNN built using keras that identifies obsticles in a field using lidar data", url:"#name",catagory:"Deep Learning",
img:"http://scanse.io/sites/default/files/product/image/FRONT.JPG" };

const project6 = {projectName:"Image Collector", 
info:"A simple scraper that downloads images using json data from imagenet. Used to accumulate image data for other projects", url:"#name",catagory:"Web Scraping",
img:"https://patrykchrabaszcz.github.io/assets/img/Imagenet32/64x64.png" };

const project7 = {projectName:"Ticket Price Analysis", 
info:"Not quite an avid football fan I often sell my tickets season tickets on StubHub. In this project I collect ticket sales data and found when it is best to sell my ticket.", url:"#name",catagory:"Data Science",
img:"https://images.unsplash.com/photo-1508863702330-2eece3ea08cb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1d89a6172238b6b42f6b9cd47a37c976&auto=format&fit=crop&w=500&q=60" };

const project8 = {projectName:"Project Name", info:"a breif description...", url:"#name",catagory:"catagory",img:img };


// var html = "<p> This Works? </p>"
// var MyComponent = React.createClass({
// 	render: function() {
// 		return React.createElement("h1", {
// 			dangerouslySetInnerHTML: {__html: html}
// 		})
// 	}
// })

class Projects extends Component {
	constrctor() {
	}

	state = {
		projects : [project1, project2, project3,project4,project5,project6,project7,project8],
		numCardsShow : 6,
		externalFile: null,
	}

	componentWillMount() {
		console.log("cards here a :")
		console.log(this.projectCards)
		this.projectCards = this.renderProjectCards()
		this.showAll = false
		this.allProjectsModal = ""
		console.log("cards here b:")
		console.log(this.projectCards)
		// console.log(test)
	}

	handleShowAll = () => {
		console.log("eh")
		this.showAll = true
		console.log(this.showAll)
		this.forceUpdate() //renders 
	}
//updares showAll to display modal
	updateShowAll = (x) => { 
		this.showAll = x
		this.forceUpdate()
	}

	getExternalFile(fileName) {
		console.log("fetching external file")
		const request = axios.get("../pages/projects/" + fileName).then (
			response => {
					this.setState({externalFile : response}, function() {
						console.log("externalFile:")
						console.log(this.state.externalFile)
					})
				}
			).catch((error) => {
				console.log("Error in getExternalFile")
				console.log(error)
			}) 
	}

	renderProjectCards() {
		let projectCards =  (
			<Row style={{marginLeft:"1%"}} type="flex" gutter={10}>
				{this.state.projects.map((project, index) => {
					let cur_projectName = project["projectName"]
					let cur_info = project["info"];
					let cur_url = project["url"];
					let cur_catagory = project["catagory"]
					let cur_img = project["img"]
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
				<Card className="projectCard">
					<Button type="danger" onClick={this.handleShowAll}>See All</Button>
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

	renderStaticHTML() {
		console.log("rendering static HTML...")
		return (
			<div dangerouslySetInnerHTML={this.getExternalFile("testProject.html")} />
		)
	}

	render() {
		// var __html = require("../pages/projects/testProject.html")
		// var template = {__html: __html}
		// var html = "<p>test test test </p>"

		console.log("renders")
		console.log(this.showAll)
		if (this.showAll == true) {
			console.log("productsss")
			// console.log(this.state.projects)
			this.allProjectsModal = <AllProjects projects={this.state.projects} updateShowAll={this.updateShowAll}/>
		}
		else {
			this.allProjectsModal = null
		}
		return(
			<div>
			<div className="indent">
			{this.allProjectsModal}
			<ScrollableAnchor id={"projects"}>
			<div className="mainView">
				{/*<div dangerouslySetInnerHTML={{__html: html}} />*/}
				<HtmlComponent/>
				<h2> Projects </h2>
				{this.projectCards}
			</div>
			</ScrollableAnchor>
			</div>
			</div>
		)
	}
}

{ /*<Card key={index} title={cur_projectName}>
								{cur_info}
							</Card> */}

export default Projects;