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
					<h2> About </h2>
					{
					// <p className="lilIndent">
					// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas, nunc dictum maximus aliquet, ante magna ultricies nulla, non ultricies enim felis at turpis. Praesent congue molestie nunc, aliquam consectetur augue viverra a. Donec ultrices eu lectus vel laoreet. Phasellus ac mollis ex, eget bibendum augue. Pellentesque sem metus, lobortis vel ligula non, tempus ultricies urna. Pellentesque ut consectetur libero, vitae efficitur massa. Pellentesque a tempus enim. Fusce justo nibh, sodales id iaculis at, rhoncus ultrices lacus. Pellentesque nec nisl risus. Nulla facilisi. Morbi ex arcu, venenatis at felis vel, vestibulum mattis nibh. Nunc interdum suscipit dui sed faucibus. Suspendisse vel nunc quis elit facilisis eleifend eu sed justo. Quisque convallis, felis scelerisque vehicula fringilla, arcu mauris porttitor lorem, vitae tristique justo arcu a mi. Praesent non mi finibus, vulputate sem eu, ullamcorper dui. Integer ac imperdiet lacus, ut sollicitudin velit.
					// </p>
				}
					<img ALIGN="right" HSPACE="50" VSPACE="0"className="aboutImage" src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/37953_1651837181038_5714193_n.jpg?oh=0d300dedd15259f9bdbe4378bc836bd0&oe=5B388265"/>
					<div className="lilIndent aboutText">
					<p> Hello, </p>
					<p> My name is Daniel Longo and I am a freshman at Woodisde High School concurrently enrolled at Cañada Community college.
					 I enjoy coding, analyising data sets, and creating predictive models. 
					I am most familiar with python, R, c++, js, and HTML & CSS. Aside from coding, I enjoy running cross country/track and playing on my school's golf team. 
					Below are some of my projects I have been working on. 
					Due to my interest in fincance many of the projects realte to the business/financial sector.</p>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas, nunc dictum maximus aliquet, ante magna ultricies nulla, non ultricies enim felis at turpis. Praesent congue molestie nunc, aliquam consectetur augue viverra a. Donec ultrices eu lectus vel laoreet. Phasellus ac mollis ex, eget bibendum augue. Pellentesque sem metus, lobortis vel ligula non, tempus ultricies urna. Pellentesque ut consectetur libero, vitae efficitur massa. Pellentesque a tempus enim. Fusce justo nibh, sodales id iaculis at, rhoncus ultrices lacus. Pellentesque nec nisl risus. Nulla facilisi. Morbi ex arcu, venenatis at felis vel, vestibulum mattis nibh. Nunc interdum suscipit dui sed faucibus. Suspendisse vel nunc quis elit facilisis eleifend eu sed justo. Quisque convallis, felis scelerisque vehicula </p>
					</div>
				</div>
			</ScrollableAnchor>
			</div>
			</Row>


		)
	}
}

export default About;