import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Son2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: '我是son组件的数据'
        }
    }

    fun() {
        PubSub.publish('evt', this.state.msg)
    }
    render() {
        return (
            <div>
                <button onClick={this.fun.bind(this)}>点我进行同级传值</button>
            </div>
        )
    }
}
