/*
 * @Description:
 * @Author: bb f
 * @Date: 2021-08-06 17:23:56
 * @LastEditors: bb f
 * @LastEditTime: 2021-08-12 15:33:20
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './index.css';
import store from './redux/store';
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// 只要store里的内容发生改变 则更新所有组件 ？此处不生效
// store.subscribe(() => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <BrowserRouter>
//                 <App />
//             </BrowserRouter>
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// });
