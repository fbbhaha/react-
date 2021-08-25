import React, { Component } from 'react'

export default class Item extends Component {
    state = { mouse: false }
    handleMouseMove = (flag) => {
        this.setState({
            mouse: flag
        })
    }
    handleCheckChange = (id) => {
        return e => {
            this.props.changeTodo(id, e.target.checked)
        }
    }
    render() {
        const { id, name, done, deleteTodo } = this.props
        const { mouse } = this.state
        return (
            <li style={{ background: mouse ? '#ddd' : '#fff' }}
                onMouseEnter={() => this.handleMouseMove(true)}
                onMouseLeave={() => { this.handleMouseMove(false) }}>

                <label >
                    <input type="checkbox" defaultChecked={done} onChange={this.handleCheckChange(id)} />
                    <span>{name}</span>
                </label>
                <button
                    className='btn btn-danger'
                    onClick={() => deleteTodo(id)}
                    style={{ display: mouse ? 'inline-block' : 'none' }}>删除</button>
            </li>
        )
    }
}
