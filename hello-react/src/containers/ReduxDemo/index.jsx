/*
 * @Description: 容器组件 通过react-redux插件的connect方法将容器组件与ui组件联系起来
 * @Author: bb f
 * @Date: 2021-08-12 10:26:03
 * @LastEditors: bb f
 * @LastEditTime: 2021-08-25 16:48:14
 */
// 引入ui组件
import ReduxDemoUI from '@/component/ReduxDemo'
import { createAsyncIncrementAction, createDecrementAction, createIncrementAction } from '@/redux/actions/count';

// 引入connect用用于连接ui组件和redux
import { connect } from "react-redux";

// mapStateToProps函数返回的对象就是传递给ui组件的props对象
const mapStateToProps = (store) => ({ data: store })

// 返回操作状态的方法对象
const mapDispatchToProps = (dispatch) => {
    return {
        increment: data => dispatch(createIncrementAction(data)),
        decrement: data => dispatch(createDecrementAction(data)),
        asyncIncrement: data => dispatch(createAsyncIncrementAction(data))
    }
}

// 创建并暴露一个容器组件 , 
// mapStateToProps和mapDispatchToProps方法的返回值作为props传递到ui组件，这样ui组件不会去调用到store的任何方法 只操作容器组件传入的props
// 容器组件会自动检测store状态的变化，所以此时不需要store.subscribe()方法
// 在index.js中引入react-redux的Provider组件 用此组件包裹的所有子组件中的容器组件都会默认传入store={store}参数 不需要自己手动传了
export default connect(
    mapStateToProps, // 映射状态
    // mapDispatchToProps 这个参数可以是方法 也可以是一个对象，为对象时react-redux会自动给 action 加上disaptch
    { // 映射操作状态的方法
        increment: createIncrementAction,
        decrement: createDecrementAction,
        asyncIncrement: createAsyncIncrementAction
    }
)(ReduxDemoUI)