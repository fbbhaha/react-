/*
 * @Description: 创建store对象，整个应用只有这一个store
 * @Author: bb f
 * @Date: 2021-08-12 10:24:04
 * @LastEditors: bb f
 * @LastEditTime: 2021-08-12 13:36:35
 */
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import countReducer from './count_reducer';
export default createStore(countReducer, applyMiddleware(thunk));
