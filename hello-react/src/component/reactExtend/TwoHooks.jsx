import React from 'react'
import { Fragment } from 'react';
import { forwardRef, useImperativeHandle, useCallback, useMemo } from 'react';
import { useRef, useState, useEffect } from 'react'


/**
 * useRef 和 useCallback 就像是类中的静态参数和静态方法 只创建一次 不会随着后面render而重新创建
 * 
 */
export default function TwoHooks() {
    // useState方法返回两个参数 值以及更新值得方法
    // 第一次调用后就会被存储下来，第二次更新时不会调用
    const [count, setcount] = useState(0)


    // 相当于 componentDidMount()
    useEffect(() => {
        // ref.current = count
        console.log('每次render都执行');
    })
    useEffect(() => {
        console.log('只在首次加载执行');
    }, [])
    // 相当于 componentDidUpdate()
    useEffect(() => {
        // const interval = setInterval(() => {
        //     setcount(count + 1)
        // }, 1000)
        // console.log('依赖得count改变就执行');

        // return () => {
        //     console.log('清除上次');
        //     clearInterval(interval)
        // }
    }, [count])

    function add() {
        // setcount(count + 1)
        setcount(count => count + 1)
    }

    // 相对于state而言 ref值的更改不会引起组件重新render，而且useref只会在首次渲染时创建 而createRef会在每次组件更新后都重新创建
    const ref = useRef(0)
    function showAlter() {
        setTimeout(() => {
            alert(ref.current)
        }, 1000)
    }

    const childRef = useRef()
    useEffect(() => {
        console.log(childRef.current.getValue());
    }, childRef)

    // useRef 和 useCallback 结合的模式 可以使得值改变，子组件不会重新渲染并且拿到最新的数据
    // 不然直接用state的值作为依赖的话,每次state改变 useCallback就会重新创建，还是会引起子组件的重新渲染 那样就和用普通方法没什么区别了
    const child2Ref = useRef('initialValue')
    const [child2State, setchild2State] = useState(0)
    const childFunc = useCallback(() => {
        console.log('childFunc', child2Ref.current);
    }, [child2Ref])
    useEffect(() => {
        console.log('update child2State', child2State);
        child2Ref.current = child2State
    }, [child2State])


    return (
        <Fragment>
            <h2>{count}</h2>
            <button onClick={add}>+1</button>
            <br />
            <h2>{ref.current}</h2>
            <button onClick={() => ref.current++}>ref+1</button>
            <button onClick={showAlter}>alter</button>
            <br />
            <ChildComponent ref={childRef} ></ChildComponent>
            {/* <button onClick={childRef.current.getValue}></button> */}
            <MemoChild childFunc={childFunc}></MemoChild>
            <button onClick={() => setchild2State(child2State + 1)}>changeRef</button>
        </Fragment>
    )
}

const ChildComponent = forwardRef((props, ref) => {
    // 此函数可以选择性暴露需要暴露的内容，不会把子组件所有东西都暴露出去
    useImperativeHandle(
        ref,
        () => ({
            getValue
        })
    )
    const getValue = () => {
        console.log('childRef' + 123);
    }
    return (
        <div>
            <input type="text" />
            <button onClick={props.childFunc}>childFunc</button>
        </div>

    )
})

const ChildComponent2 = (props) => {
    console.log('child render');
    return (
        <div>
            <button onClick={props.childFunc}>childFunc</button>
        </div>
    )
}
// 此处需要memo函数的配合才能实现useCallback的功能
const MemoChild = React.memo(ChildComponent2)