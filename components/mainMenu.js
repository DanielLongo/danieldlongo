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
					<Menu.Item key="about"> About </Menu.Item>
					<Menu.Item class="mainMenuItem" key="projects"> Projects </Menu.Item>
				{/* need to center Menu Items */}
					<Menu.Item key="visuals"> Visuals </Menu.Item>
					<Menu.Item key="contact"> Contact </Menu.Item>
				</Menu>
			</div>
		)
	}
}

export default MainMenu;