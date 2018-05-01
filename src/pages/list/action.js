/*!
 * 此模块定义需要用到的Actions
*/

import Types from './action.types';

const Action = {
  // 点击的action
  clickTest() {
    return {
      type:Types.clickTest
    };
  }
};

export default Action;