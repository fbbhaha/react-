import React, { Component } from 'react'

import Hello from './component/Hello';
import Parent from './component/Parent';
import Feach from './component/Fetch';
import MyRouter from './component/MyRouter';
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'
import axios from 'axios'
import AntdDemo from './component/AntdDemo';
import ReduxDemo from './component/ReduxDemo/mergeContainer';
export default class App extends Component {
    state = {
        todos: [
            { id: 1, name: 'eat', done: true },
            { id: 2, name: 'code', done: true },
            { id: 3, name: 'sleep', done: false },
        ]
    }
    addTodo = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }
    changeTodo = (id, done) => {
        const { todos } = this.state
        todos.map(item => {
            if (item.id === id)
                item.done = done
            return item
        })
        this.setState({
            todos
        })
    }
    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(item => item.id !== id)
        })
    }
    clearAllDone = () => {
        this.setState({
            todos: this.state.todos.filter(item => !item.done)
        })
    }
    componentDidMount() {
        try {
            // axios.get('http://localhost:3000/api1/students').then(res => {
            //     console.log(res);
            // })
            // axios.get('http://localhost:3000/api2/cars').then(res => {
            //     console.log(res);
            // })
        } catch (error) {
            console.error('server closed');
        }

    }
    render() {
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo={this.addTodo} />
                        <List todos={this.state.todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo} />
                        <Footer todos={this.state.todos} clearAllDone={this.clearAllDone} />
                    </div>
                </div>
                <Hello />
                <Parent />
                <Feach />
                <MyRouter />
                <AntdDemo />
                <ReduxDemo />
            </div>

        )
    }
}

