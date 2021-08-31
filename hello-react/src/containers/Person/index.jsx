import { createAddPersonAction } from '@/redux/actions/person';
import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import { connect } from 'react-redux';

class Person extends Component {
    submit = () => {
        const personObj = {
            id: nanoid(),
            name: this.nameVal.value
        }
        this.props.addPerson(personObj)
        this.nameVal.value = ''
    }
    render() {
        return (
            <div>
                <h2>我是person组件 count组件求和为{this.props.he}</h2>
                <input type="text" ref={c => this.nameVal = c} />
                <button onClick={this.submit}>添加</button>
                <br />
                <ul>
                    {this.props.rens.map(item => <li key={item.id}>{item.name}</li>)}
                </ul>
            </div>
        )
    }
}
export default connect(
    state => ({ rens: state.person, he: state.count }),
    {
        addPerson: createAddPersonAction
    }
)(Person)