/*
 * @Description: 为count组件生成action对象
 * @Author: bb f
 * @Date: 2021-08-12 11:18:35
 * @LastEditors: bb f
 * @LastEditTime: 2021-08-12 13:47:37
 */

import { DECREMENT, INCREMENT } from './constant';

/**
 * 同步action 返回的是一个对象
 */
export const createIncrementAction = data => ({ type: INCREMENT, data });
export const createDecrementAction = data => ({ type: DECREMENT, data });
/**
 * 异步action 返回的是一个函数，但是store只能接受对象，不能接收方法作为参数
 * 此时我们需要在store中引入一个中间件 redux-thunk 该中间件可以使store接收到函数作为参数后，执行该函数
 * 异步action中一般会调用同步action
 *  */
export const createAsyncIncrementAction = data => {
    return dispatch => {
        setTimeout(() => {
            dispatch(createIncrementAction(data));
        }, 1000);
    };
};
