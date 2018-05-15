import React, {Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
class MyFooter extends Component {
	render() {
		return(
            <Footer style={{ textAlign: 'center' }}>
                <p> Daniel Longo © 2017 Created by Daniel Longo </p>
                <a href="https://github.com/DanielLongo"> <Icon style={{color:"black", fontSize:"50px"}} type="github" /> </a>
            </Footer>

		)
	}
}

export default MyFooter;