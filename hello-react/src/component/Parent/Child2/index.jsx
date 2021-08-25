import React, { Component } from 'react'
import PubSubJs from 'pubsub-js'
export default class Child2 extends Component {
    state = {
        msg: ''
    }
    componentDidMount() {
        // 利用pubsub 订阅消息，获取发布的内容
        PubSubJs.subscribe('send', (_, value) => {
            // this.state.msg = value
            this.setState({
                msg: value
            })
        })
    }
    render() {
        return (
            <div>
                {this.state.msg}
            </div>
        )
    }
}
