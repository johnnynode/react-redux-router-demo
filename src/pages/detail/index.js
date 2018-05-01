/*!
 * Detail Container
*/
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Detail from './detail';
import Action from './action';

class Container extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<Detail />
			</div>
		);
	}
	componentDidMount() {
	  	console.log("Here is Detail page！");
	}
}

export default connect(
  null, null
)(Container);