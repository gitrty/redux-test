import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'

export default class Son extends Component {
    // static propTypes = {
    // prop: PropTypes
    // }

    constructor(props) {
        super(props)
        PubSub.subscribe('evt', (eventName, data) => {
            console.info(data)   // 这里会打印两次,因为react在开发环境下会执行两次constructor
        })
        this.state = {
            name: 'toyo'
        }
    }

    render() {
        return (
            <div>
                <div>son组件的值{this.state.name}</div>
                {/* <button onClick={this.props.fun.bind(this, this.state.name)}>子组件按钮</button> */}
            </div>
        )
    }
}
