/*!
 * 此模块定义一些通用的封装方法
*/ 

class Utils {
  // 去除空白
  trim(str) {
    return typeof str === 'string' ? str.replace(/^\s+|\s+$/g, "") : "";
  }
}

export default new Utils();

