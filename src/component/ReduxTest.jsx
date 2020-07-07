import React, { Component } from 'react'
import { store } from '../redux/store'  // 合并后的所有数据
import jjAction from '../redux/action/jiajian'
import ccAction from '../redux/action/chengchu'

export default class ReduxTest extends Component {
    constructor(props) {
        super(props)
        console.info(store.getState().jiaJian)
        this.state = {
            // 创建的 store 对象中，getState 用来获取 redux 管理的数据,  jiaJian 为 combineReducers 合并之后的其中一个 reducer 模块
            toyoAge: store.getState().jiaJian.age,
            tiantianAge: store.getState().chengChu.age
        }
    }

    componentDidMount() {
        // subscribe - 监听redux数据变化，页面挂载是触发 监听，当redux数据改变时，触发回调函数
        store.subscribe(() => {
            this.setState({
                toyoAge: store.getState().jiaJian.age,
                tiantianAge: store.getState().chengChu.age
            })
        })
    }

    render() {
        return (
            <div>
                {/* 通过 dispatch 来触发 reducer 中 函数，参数当做第二盒参数 action 传入，此处 action.add(1) 返回一个对象 { type: 'ADD', data: num } */}
                <div>toyo的年龄 ---- {this.state.toyoAge}</div>
                <button onClick={() => { store.dispatch(jjAction.add(1)) }}>加</button>
                <button onClick={() => { store.dispatch(jjAction.del(1)) }}>减</button>
                <div>天天的年龄 ---- {this.state.tiantianAge}</div>
                <button onClick={() => { store.dispatch(ccAction.cheng(2)) }}>乘</button>
                <button onClick={() => { store.dispatch(ccAction.chu(2)) }}>除</button>
            </div>
        )
    }
}
