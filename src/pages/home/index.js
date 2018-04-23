/*!
 * Home UI
*/
import React, { Component } from 'react';

class Home extends Component {
	render() {
		return (
			<div>
				<h3>Home page</h3>
			</div>
		);
	}
	componentDidMount() {
	  	console.log("Home渲染完毕！");
	}
}

export default Home