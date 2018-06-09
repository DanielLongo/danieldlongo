import React, {Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import {Row} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
class MyFooter extends Component {
	render() {
		return(
            <Footer style={{ textAlign: 'center' }}>
                <p> Daniel Dominic Longo © 2017</p>
                <p style={{marginTop:"-.5%"}}> Created by Daniel Dominic Longo </p>
                <Row gutter={10}> 
                    <a href="https://github.com/DanielLongo"> <Icon style={{color:"black", fontSize:"50px"}} type="github" /> </a>
                    <a href="https://www.linkedin.com/in/daniel-longo-a1805a163/"> <Icon style style={{color:"black", fontSize:"50px"}} type="linkedin" /></a>
                </Row>
            </Footer>

		)
	}
}

export default MyFooter;