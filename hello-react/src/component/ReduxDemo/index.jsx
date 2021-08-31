/*
 * @Description: ui组件，根据容器组件传入的props操作store的值
 * @Author: bb f
 * @Date: 2021-08-12 10:26:03
 * @LastEditors: bb f
 * @LastEditTime: 2021-08-25 16:48:01
 */

import React, { Component } from 'react'
import { Button, Select } from 'antd'
import store from '@/redux/store'
import { createAsyncIncrementAction, createDecrementAction, createIncrementAction } from '@/redux/actions/count'

class ReduxDemo extends Component {
    state = {
        selectValue: 1
    }
    handleSelectChange = (val) => {
        this.setState({
            selectValue: val
        })
    }
    increment = () => {
        // 通知store进行increment操作
        // store.dispatch({ type: 'increment', data: +this.state.selectValue })
        store.dispatch(createIncrementAction(+this.state.selectValue))
    }
    decrement = () => {
        store.dispatch(createDecrementAction(+this.state.selectValue))
    }
    asyncIncrement = () => {
        store.dispatch(createAsyncIncrementAction(+this.state.selectValue))
    }
    // 在index.js文件中引入了该方法 则在内部组件中不需要使用这一步
    // componentDidMount() {
    //     console.log(this.props);
    //     // 订阅store的消息 当有事件发生则更新页面，因为store只管理状态，而不关心视图的修改
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }
    render() {
        return (
            <div>
                {/* 获取store里存放的值 */}
                <h1>当前求和为：{store.getState()}</h1>
                <Select defaultValue={1} onChange={this.handleSelectChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </Select>
                <Button onClick={() => this.props.increment(this.state.selectValue)}>+</Button>
                <Button onClick={() => this.props.decrement(this.state.selectValue)}>-</Button>
                <Button onClick={() => this.props.asyncIncrement(this.state.selectValue)}>异步加</Button>
            </div>
        )
    }
}






