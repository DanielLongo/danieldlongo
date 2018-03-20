import React, { Component } from 'react';
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser'
// console.log("v " + v)
// var fs = require('browserify-fs');
//var text = fs.readFile("../pages/projects/testProject.txt","utf-8");
// var text = fs.readFileSync("../pages/projects/testProject.txt", "utf-8")
// console.log("text")
// console.log(text)
// console.log("text")
// console.log(ReactHtmlParser(text))
class HtmlComponent extends Component {
	// constructor(props) {
		// this.fileLoc = props.fileLoc //includes file name and path
	// }

	render() {
	// 	const html = "<p class='test'>Hello</p>"
	return (
		<p> Hello </p>
		)
	// 	<div>
	// 	 	{ReactHtmlParser(text)}
	// 	</div>
	}
}

export default HtmlComponent;
