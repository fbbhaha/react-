import React, { Component } from 'react'

export default class OneSetState extends Component {
    state = {
        count: 0
    }
    /**
     *  1. setState本身是一个异步的方法
     * 
     *  2. setState参数可以是对象或者函数 
     *   对象的写法是函数写法的一种语法糖，真正的应该写函数
     *   函数写法可以传入两个参数 state 和 props
     * 
     *  3. setState可以接收两个参数，第二个参数是执行完数据及页面更新后的回调
     */
    add = () => {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('setState及render执行完后的count:' + this.state.count);
        })
        console.log('setState及render执行前的count:' + this.state.count);
    }
    remove = () => {
        this.setState((state, props) => ({ count: state.count - 1 }))
    }
    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.add}>+1</button>
                <button onClick={this.remove}>-1</button>
            </div>
        )
    }
}
