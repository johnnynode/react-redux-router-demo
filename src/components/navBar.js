import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css';

export default class NavBar extends Component {
	render() {
		return (
			<ul className="clearfix nav-bar">
				<li className="left"><NavLink to="/">首页</NavLink></li>
				<li className="left"><NavLink to={{pathname:"/list", search:"?category=0101"}}>列表页</NavLink></li>
				<li className="left"><NavLink to="/about">关于页</NavLink></li>
			</ul>
		);
	}
}