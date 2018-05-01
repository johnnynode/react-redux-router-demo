/*!
 * Home Container
*/
import React, { Component } from 'react';
import {connect} from 'react-redux';
import List from './list';
import Action from './action';

class Container extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<List />
			</div>
		);
	}
	componentDidMount() {
	  	console.log("Here is List page！");
	}
}

export default connect(
  null, null
)(Container);