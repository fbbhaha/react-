import React, { lazy, Suspense } from 'react'
import { Link, Route } from 'react-router-dom'
// import Detail from './Detail'
const Detail = lazy(() => import('./Detail'))

export default function Message() {
    return (
        <div>
            {/* 向路由组件传递params参数 */}
            {/* <Link to={`/home/message/detail/${1}/${'消息1'}`}>Message</Link> */}
            {/* <Route path='/home/message/detail/:id/:title' component={Detail} /> */}

            {/* 向路由组件传递search参数 */}
            {/* <Link to={`/home/message/detail?id=${1}&title=${'消息1'}`}>Message</Link> */}
            {/* <Route path='/home/message/detail' component={Detail} /> */}

            {/* 向路由组件传递search参数 */}
            <Link replace to={{ pathname: '/home/message/detail/1', state: { id: 1, title: '消息1' } }}>Message1</Link>
            ---
            <Link replace to={{ pathname: '/home/message/detail/2', state: { id: 1, title: '消息2' } }}>Message2</Link>
            <Suspense fallback={<h2>loading</h2>}>
                <Route path='/home/message/detail' component={Detail} />
            </Suspense>
        </div>
    )
}
