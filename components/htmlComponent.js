import React, { Component } from 'react';
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser'

class HtmlComponent extends Component {
  render() {
    const html = "<p class='test'>Hello</p>"
    return (
    <div>
     	{ReactHtmlParser(html)}
    </div>
    );
  }
}

export default HtmlComponent;
