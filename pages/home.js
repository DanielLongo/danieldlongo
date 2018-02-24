import React, { Component } from 'react';
import Name from "..//views/name.js"
import About from "..//views/about.js"
import Projects from "..//views/projects.js"
import Visuals from "..//views/visuals.js"
import Contact from "..//views/contact.js"
import MainMenu from "..//components/mainMenu.js"

class MainPage extends Component {
	render() {
		return (
			<div>
				<Name/>
				<MainMenu/>
				<About/>
				<Projects/>
				<Visuals/>
				<Contact/>
			</div>)
	}
}

export default MainPage;