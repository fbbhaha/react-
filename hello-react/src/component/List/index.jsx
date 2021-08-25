import React, { Component } from 'react'
import Item from './Item'
import PropTypes from 'prop-types'

export default class List extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        changeTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }
    render() {
        return (
            <ul className='todo-main'>
                {
                    this.props.todos.map(item => {
                        return <Item {...item} key={item.id} changeTodo={this.props.changeTodo} deleteTodo={this.props.deleteTodo} />
                    })
                }
            </ul>
        )
    }
}
