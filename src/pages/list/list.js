/*!
 * List UI
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class List extends Component {
	render() {
		return (
			<div>
				<h3>List page</h3>
				<ul>
					<li><Link to={{pathname:"/detail", search:"?category=0101?id=01"}}>detail 01</Link></li>
					<li><Link to={{pathname:"/detail", search:"?category=0102?id=02"}}>detail 02</Link></li>
					<li><Link to={{pathname:"/detail", search:"?category=0103?id=03"}}>detail 03</Link></li>
				</ul>
			</div>
		);
	}
}