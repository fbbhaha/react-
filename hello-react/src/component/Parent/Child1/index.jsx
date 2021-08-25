import React, { Component } from 'react'
import PubSubJs from 'pubsub-js'

export default class Child1 extends Component {

    publishMessage = () => {
        // child1 发布消息
        PubSubJs.publish('send', 123123)
    }
    render() {
        return (
            <div>
                <button onClick={this.publishMessage}>send message</button>
            </div>
        )
    }
}
