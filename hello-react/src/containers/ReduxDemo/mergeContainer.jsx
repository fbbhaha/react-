
/*
 * @Description: 将ui组件和容器组件合并
 * @Author: bb f
 * @Date: 2021-08-12 10:26:03
 * @LastEditors: bb f
 * @LastEditTime: 2021-08-25 16:51:58
 */
import React, { Component } from 'react'
import { Button, Select } from 'antd'
import { createAsyncIncrementAction, createDecrementAction, createIncrementAction } from '@/redux/actions/count'
// 引入connect用用于连接ui组件和redux
import { connect } from "react-redux";

class ReduxDemo extends Component {
    state = {
        selectValue: 1
    }
    handleSelectChange = (val) => {
        this.setState({
            selectValue: val
        })
    }
    render() {
        return (
            <div>
                {/* 获取store里存放的值 */}
                <h1>当前求和为：{this.props.data}</h1>
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


export default connect(
    store => ({ data: store.count }),
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        asyncIncrement: createAsyncIncrementAction
    }
)(ReduxDemo)



