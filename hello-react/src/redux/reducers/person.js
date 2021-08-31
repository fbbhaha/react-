/*
 * @Description:
 * @Author: bb f
 * @Date: 2021-08-25 15:12:55
 * @LastEditors: bb f
 * @LastEditTime: 2021-08-25 15:40:46
 */

import { ADD_PERSON } from '../constant';

const initState = [{ id: '001', name: 'tom' }];
export default function personReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case ADD_PERSON:
            return (preState = [data, ...preState]);
        default:
            return preState;
    }
}
