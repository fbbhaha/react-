/*
 * @Description: 创建一个为count组件服务的reducer 他的本质是一个函数
 * @Author: bb f
 * @Date: 2021-08-12 10:26:03
 * @LastEditors: bb f
 * @LastEditTime: 2021-08-25 16:54:37
 */
import { DECREMENT, INCREMENT } from '../constant';

export default function countReducer(preState = 0, action) {
    const { type, data } = action;
    switch (type) {
        case INCREMENT:
            // reduce是纯函数 不能修改传入参数的值
            return preState + +data;
        case DECREMENT:
            return preState - data;
        default:
            return preState;
    }
}
