import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
import { Anchor } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

// flipping cards https://davidwalsh.name/css-flip

class MainMenu extends Component {
	render() {
		return(	
			<div>
				<Anchor>
				<Menu
				mode="horizontal"
				>
					<Menu.Item key="about"> <a className="menuText" href="#about">About</a></Menu.Item>
					<Menu.Item class="mainMenuItem" key="projects"> <a className="menuText" href="#projects">Projects</a> </Menu.Item>
				{/* need to center Menu Items */}
					<Menu.Item key="visuals"> <a className="menuText" href="#visuals">Visuals</a> </Menu.Item>
					<Menu.Item key="contact"> <a className="menuText" href="#contact">Contact</a> </Menu.Item>
				</Menu>
				</Anchor>
			</div>
		)
	}
}

export default MainMenu;