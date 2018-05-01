/*!
 * Home Container
*/
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Home from './home';
import Action from './action';

class Container extends Component {
	render() {
    // 从props中取出属性
		const {
			clickTest
    } = this.props;
    
    console.log(this.props);

		return (
			<div>
				<Home 
          clickTest={
            () => {
              clickTest();
            }
          }
        />
			</div>
		);
	}
	componentDidMount() {
	  	console.log("Here is Home page！");
	}
}

export default connect(
  null, {
    clickTest: Action.clickTest
  }
)(Container);