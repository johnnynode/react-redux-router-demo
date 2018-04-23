/*!
 * 404 UI
*/
import React, { Component } from 'react';

class NotFound extends Component {
	render() {
		return (
			<div>
				<h3>NotFound page</h3>
			</div>
		);
	}
	componentDidMount() {
	  	console.log("NotFound渲染完毕！");
	}
}

export default NotFound