import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import Home from './pages/Home'
import About from './pages/About'
import Header from './pages/Header'

export default class MyRouter extends Component {
    /**
     * 前端路由分为 history模式以及hash模式
     * 
     * history模式：
     * 是使用的BOM中自带的history进行操作的，他拦截了页面的跳转，
     * 并向历史记录中push新的路由，从而产生历史记录，再通过不同的路由匹配显示不同的内容
     * 
     * hash模式：
     * 不会引起页面的跳转，但是也会产生历史记录，此时页面根据#号后不同的路由匹配不同的页面
     * 
     */
    render() {
        return (
            <div>
                <Header></Header>
                {/* 标签体内容 "home" "about" 是标签的一个默认属性children */}
                <MyNavLink to="/about">about</MyNavLink>
                ---
                {/* 
                    此处默认为模糊匹配，只要route中包含匹配项则显示该路由页面，而且是从前匹配，开头不同则不会继续匹配
                    在route上添加exact配置是否开启精准匹配 exact={ true } 严格匹配不要随便开启
                */}
                <MyNavLink to="/home/a/b">home</MyNavLink>
                {/* swich标签会使页面路由匹配到就不再匹配了，从而提高效率 */}
                <Switch>
                    {/*
                    Route中的组件为路由组件，路由器在渲染是会默认传入prop值
                        history:
                            go: ƒ go(n)
                            goBack: ƒ goBack()
                            goForward: ƒ goForward()
                            push: ƒ push(path, state)
                            replace: ƒ replace(path, state)
                        location:
                            hash: ""
                            pathname: "/home"
                            search: ""
                            state: null
                        match:
                            isExact: true
                            params: {}
                            path: "/home"
                            url: "/home"
                */}
                    {/* <Route exact={true} path='/about' component={About} /> */}
                    <Route path='/about' component={About} />
                    <Route path='/home' component={Home} />
                    {/* 放在最后都匹配不上则返回重定向结果 */}
                    <Redirect to='home' />
                </Switch>

            </div>

        )
    }
}
