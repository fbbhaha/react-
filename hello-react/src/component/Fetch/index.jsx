import React, { Component } from 'react'

export default class Feach extends Component {
    state = {
        feachData: ''
    }
    async componentDidMount() {
        // fetch 和 xhr 不同点在于它更加符合 "关注分离" 设计思想，每次发送请求，首先返回是否能够链接服务器，再通过response.json()返回数据
        fetch('http://localhost:3000/students').then(
            response => {
                console.log('link server success');
                return response.json()
            }
        ).then(res => {
            console.log('get data success. data:', res);
        }).catch(e => console.log('request field', e))

        try {
            const response = await fetch('http://localhost:3000/students')
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.log('request field', error)
        }

    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
