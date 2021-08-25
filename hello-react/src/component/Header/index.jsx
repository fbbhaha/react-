import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export default class Header extends Component {
    handleKeyUp = (e) => {
        const { keyCode, target } = e
        if (keyCode === 13) {
            if (target.value.trim() === '') return
            this.props.addTodo({
                name: target.value,
                id: nanoid(),
                done: false
            })
            target.value = ''
        }

    }
    render() {
        return (
            <div className='todo-header'>
                <input type="text" onKeyUp={this.handleKeyUp} />
            </div>
        )
    }
}
