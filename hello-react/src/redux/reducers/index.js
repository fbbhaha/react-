/*
 * @Description: 汇总并暴露所有的reduces
 * @Author: bb f
 * @Date: 2021-08-25 16:46:22
 * @LastEditors: bb f
 * @LastEditTime: 2021-08-25 16:55:55
 */
import { combineReducers } from 'redux';
import count from './count';
import person from './person';

// 汇总所有的reducer
export default combineReducers({
    count,
    person,
});
