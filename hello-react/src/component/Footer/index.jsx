import React, { Component } from 'react'

export default class Footer extends Component {
    state = {
        isAllChecked: false
    }
    render() {
        return (
            <div className='todo-footer'>
                <label><input type="checkbox" />全部已完成</label>
                <span>
                    <span> 已完成{this.props.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)}</span>/全部 {this.props.todos.length}
                </span>
                <button className='btn btn-danger' onClick={this.props.clearAllDone}>清除已完成任务</button>
            </div>
        )
    }
}
