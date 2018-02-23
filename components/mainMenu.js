import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MainMenu extends Component {
	render() {
		return(
			<div>
				<Menu
				mode="horizontal"
				>
					<Menu.Item key="about"> <a href="#about">About</a></Menu.Item>
					<Menu.Item class="mainMenuItem" key="projects"> <a href="#projects">Projects</a> </Menu.Item>
				{/* need to center Menu Items */}
					<Menu.Item key="visuals"> <a href="#visuals">Visuals</a> </Menu.Item>
					<Menu.Item key="contact"> <a href="#contact">Contact</a> </Menu.Item>
				</Menu>
			</div>
		)
	}
}

export default MainMenu;