/*
 * @Description:
 * @Author: bb f
 * @Date: 2021-08-25 15:10:33
 * @LastEditors: bb f
 * @LastEditTime: 2021-08-25 15:12:21
 */

import { ADD_PERSON } from '../constant';

export const createAddPersonAction = personObj => ({ type: ADD_PERSON, data: personObj });
