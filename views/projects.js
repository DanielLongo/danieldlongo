import React, {Component} from 'react';
import { Card, Col, Row } from 'antd';
import ScrollableAnchor from "react-scrollable-anchor"
import { configureAnchors } from "react-scrollable-anchor"
import {Button} from 'antd';
import {Modal} from 'antd';
import AllProjects from "./allProjects"
import HtmlComponent from "../components/htmlComponent"
import { message} from 'antd';
// import test from "../pages/projects/testProject.txt"


configureAnchors({offset: -45, scrollDuration: 500})
//project = {str projectName, str info,str(image adress) background,str url}
const img = "https://images.unsplash.com/photo-1505283884983-cf47b9e0f9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5c514001a3b6a6a18e6716dec11ad066&auto=format&fit=crop&w=1650&q=80"
const projectA = {projectName: "GANs for EEGs", url:"https://github.com/DanielLongo/eegML", catagory:"Deep Learning",
	img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/35s_SWK_REM.png/1280px-35s_SWK_REM.png",
	info:"Recurrent, conlvolutional, and progressive GANs for the generation of EEGs while working to incorporate physics based models with the GAN."
}

const projectB = {projectName:"Contract Reader", url:"https://github.com/DanielLongo/ContractsReader", catagory:"NLP",
	img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/National_Proletarian_Doctrine.pdf/page1-93px-National_Proletarian_Doctrine.pdf.jpg",
	info: "Programs to read startup contracts in order to track corporate governance and shareholder rights."
}

const projectC = {projectName:"Call Wall", url:"http://callwall.s3-website-us-west-1.amazonaws.com/", catagory:"Mobile App",
	img:"call wall.png",
	info: "A mobile application that blocks spam phone calls. The app checks if a phone number is spoofed through call APIs and references all incoming numbers with scraped scam phone number records."
}

const projectD = {projectName:"Transfer Learning cDCGANs", url:"https://github.com/DanielLongo/cGANs", catagory:"Deep Learning",
	img:"https://github.com/DanielLongo/cGANs/raw/master/generated_images/0-20.gif",
	info: "Transfering learning implemented in conditional DCGANs."
}

const projectE = {projectName:"cs231n Assignments", url:"https://github.com/DanielLongo/cs231n", catagory:"Computer Vision",
	img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/3_filters_in_a_Convolutional_Neural_Network.gif/800px-3_filters_in_a_Convolutional_Neural_Network.gif",
	info:"Stanford cs231n assignments completed with PyTorch, Tensorflow, and numpy."
}

const projectF = {projectName:"CapsuleGAN", url:"https://github.com/DanielLongo/CapsGAN", catagory:"Deep Learning",
	img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/MnistExamples.png/120px-MnistExamples.png",
	info:"A Generative Adversarial Network with a Capsule Based (Hinton et al.) discriminator"
}
const project1 = {projectName:"Logistic Regression from Scratch", 
info:"Logistic regression using only numpy to identify cows.", url:"projects/Logistic_Regression_Model-notes.html",catagory:"ML" ,img:
"https://images.unsplash.com/photo-1502590464431-3b66d77494d7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=464528617b90a6f30c1cbcd6db84d90b&auto=format&fit=crop&w=667&q=80"};

const project2 = {projectName:"Neural Net from Scratch", 
info:"A vanilla neural net built entirely from scratch.", url:"projects/NN.html",catagory:"Deep Learning",
img:img };

const project3 = {projectName:"CNN from Scratch", 
info:"A CNN built to classify images better than logistic regression models or standard vanilla neural nets. Built entirely from scratch.", url:"#projects",catagory:"Deep Learning",
img:"https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ba9893452f120b4af8ffe3b3f9475e7f&auto=format&fit=crop&w=750&q=80" };

const project4 = {projectName:"RNN Cryptocurrencey Predictor", 
info:"A RNN built using tensorflow that relates cryptocurrency prices and predicts how they will move in the future.", url:"https://github.com/DanielLongo/CryptoRnn",catagory:"Deep Learning",
img:"https://images.unsplash.com/photo-1519995451813-39e29e054914?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5c0478ad15d7b018f8bb59f644f17184&auto=format&fit=crop&w=750&q=80" };

const project5 = {projectName:"Lidar Object Detection", 
info:"A CNN built using keras that identifies obstacles in a field using lidar data.", url:"#projects",catagory:"Deep Learning",
img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Airborne_Lidar_Bathymetric_Technology.jpg/120px-Airborne_Lidar_Bathymetric_Technology.jpg" };

const project6 = {projectName:"Image Collector", 
info:"A simple scraper that downloads images using json data from imagenet. Used to accumulate image data for other projects.", url:"#projects",catagory:"Web Scraping",
img:"https://patrykchrabaszcz.github.io/assets/img/Imagenet32/64x64.png" };


const project8 = {projectName:"Simple WebGL Game in Unity",
info: "Use a and d to slide right and left. Avoid the cubes!",
url: "http://slidergame.s3-website-us-west-1.amazonaws.com/",
img: "https://udemy-images.udemy.com/course/750x422/1210008_6859.jpg",
catagory:"Other"}

const project9 = {projectName:"Project Name", info:"a breif description...", url:"#projects",catagory:"catagory",img:img };


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
		projects : [projectA, projectB, projectE, projectC, projectD, projectF, project1, project2,project4,project5,project6,project8],
		numCardsShow : 9,
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
		message.config({
			top: 15,
			duration: .75,
			maxCount: 4,
		  });
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

	// getExternalFile(fileName) {
	// 	console.log("fetching external file")
	// 	const request = axios.get("../pages/projects/" + fileName).then (
	// 		response => {
	// 				this.setState({externalFile : response}, function() {
	// 					console.log("externalFile:")
	// 					console.log(this.state.externalFile)
	// 				})
	// 			}
	// 		).catch((error) => {
	// 			console.log("Error in getExternalFile")
	// 			console.log(error)
	// 		}) 
	// }

	checkIfAvaliable(cur_url) {
		if (cur_url == "#projects") {
			console.log("LOGGED");
			message.error("This project is not avaliable to view yet");
		}
		else {
			console.log("Routing to " + cur_url);
		}
	}

	renderProjectCards() {
		let projectCards =  (
			<Row type="flex" gutter={10}>
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
								<div onClick={() => this.checkIfAvaliable(cur_url)} class="back">
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
					<Button type="danger" onClick={this.handleShowAll} size={"Large"}>See All</Button>
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
				<h1 className="sectionTitleText"> Projects </h1>
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