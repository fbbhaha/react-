import React, { Component } from 'react';
// 将css文件当成一个模块加载，这样的话就不会出现其他css文件的样式污染
import hello from './index.module.css';

export default class Hello extends Component {
    render() {
        return <div className={hello.title}>hello world!</div>;
    }
}
