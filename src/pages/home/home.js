/*!
 * Home UI
*/
import React, { Component } from 'react';

class Home extends Component {
	// 定义默认props
	static get defaultProps() {
    return {
      clickTest: ()=>{}
    }
	}
	
	render() {
		// 从props中取出属性
		const {
			clickTest
		} = this.props;

		return (
			<div>
				<h3>Home page</h3>
				<hr />
				<button onClick={
					()=>{
						clickTest();
					}
				}>click here to test</button>
			</div>
		);
	}
}

export default Home