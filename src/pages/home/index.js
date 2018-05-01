/*!
 * Home Container
*/
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Home from './home';

class Container extends Component {
	render() {
		return (
			<div>
				<Home />
			</div>
		);
	}
	componentDidMount() {
	  	console.log("Here is Home page！");
	}
}

export default connect(
  null, null
)(Container);