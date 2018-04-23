/*!
 * 此模块定义store
*/ 

import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; // 使用 redux-thunk 来处理中间件
import rootReducer from '../Reducers';

let composedReduer = combineReducers(rootReducer);
let store = applyMiddleware(thunk)(createStore)(composedReduer);

export default store;