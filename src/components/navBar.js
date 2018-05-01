import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
	render() {
		return (
			<ul>
				<li><NavLink to="/">首页</NavLink></li>
				<li><NavLink to={{pathname:"/list", search:"?category=0101"}}>列表页</NavLink></li>
				<li><NavLink to="/">关于页</NavLink></li>
			</ul>
		);
	}
}