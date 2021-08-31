import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import MyNavLink from '../../components/MyNavLink';
// import News from './News'
// import Message from './Message'
import { lazy, Suspense } from 'react';
const News = lazy(() => import('./News'))
// const Message = lazy(() => import('./Message'))

export default function Home(props) {
    return (
        <div>
            我是Home组件
            <MyNavLink to='/home/news'>news</MyNavLink>
            <MyNavLink to='/home/message'>message</MyNavLink>
            <Suspense fallback={<h2>loading</h2>}>
                <Switch>
                    {/* 页面切换到home组件时，home组件开始渲染，继续匹配/home路由 匹配不到则默认重定向到/home/news */}
                    <Route path='/home/news' component={News} />
                    {/* <Route path='/home/message' component={Message} /> */}
                    <Redirect to='/home/news' />
                </Switch>
            </Suspense>

        </div>
    )
}
