/*!
* 此模块定义通用的回调函数名称
* 在Action和Reducer中都需要引用
* 这里需要特别注意, Symbol函数返回全局唯一的symbol类型的数据,在状态树种不会重复
*/

export default {
  clickTest: Symbol()
}