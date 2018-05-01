/*!
 * 此模块是解耦reducer中需要用到的功能函数
 * 注意：每一个函数必须有return值，如果不涉及数据操作 则 return state; 返回原state值, 写法为：{...state}
*/

class Utils {
  clickTest(state={}, action={}) {
    console.log('reducer.utils.homeBtnClick state');
    return {...state};
  }
}

export default new Utils();