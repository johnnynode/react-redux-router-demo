/*!
 * 此模块定义Home Page中的reducer
*/

import Types from './action.types';
import Utils from './reducer.utils';

// state 默认值为 [], action 默认值为 {}
export default (state = {}, action = {}) => {
  // 通过switch来做判断
  switch(action.type) { 
    // 点击按钮的action
    case Types.clickTest:
      return Utils.clickTest(state, action);
    default:
      return {...state};
  }
};