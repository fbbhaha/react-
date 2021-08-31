/*
 * @Description: 创建store对象，整个应用只有这一个store
 * @Author: bb f
 * @Date: 2021-08-12 10:24:04
 * @LastEditors: bb f
 * @LastEditTime: 2021-08-25 16:57:12
 */
import { applyMiddleware, createStore } from 'redux';
// 添加中间件使得可以使用异步的action
import thunk from 'redux-thunk';
import reducers from './reducers';

// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
