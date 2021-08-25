import React from 'react'
// import qs from 'querystring'

export default function Detail(props) {
    console.log(props);
    const pushShow = () => {
        // props.history.push({ pathname: '/home/message/detail/2', state: { id: 1, title: '消息2' } })
        props.history.push('/home/message/detail/2', { id: 1, title: '消息2' })
        // props.history.replace({ pathname: '/home/message/detail/2', state: { id: 1, title: '消息2' } })
    }


    return (
        <div>
            {/* 接受params参数 */}
            {/* {props.match.params.title} */}

            {/* 接受search参数(qs.parse将urlcode编码格式转化为对象 qs.stringfy作用相反) */}
            {/* {qs.parse(props.location.search.slice(1)).title} */}

            {/* 接受state参数 (此时的数据保存在history中，在hash模式中该值会丢失) */}
            {props.location.state.title}
            <button onClick={pushShow}>编程式路由导航</button>
        </div>
    )
}
