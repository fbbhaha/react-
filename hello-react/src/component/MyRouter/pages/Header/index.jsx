import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
    componentDidMount() {
        console.log('头部组件的router', this.props.history);
    }
    render() {
        return (
            <div>
                我来组成头部
            </div>
        )
    }
}
// withRouter 可以加工一般组件，使其可以使用router的方法
export default withRouter(Header)