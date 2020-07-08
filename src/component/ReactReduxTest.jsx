import React, { Component } from 'react'
import { connect } from 'react-redux'

// 作为connect的第一个参数，将state映射到当前组件
let mapStateToProps = state => ({
  age: state.chengChu.age
})

// 作为connect的第二个参数，参数为dispatch，每个字段对应一个dispath派发的action，用来改变state
let mapDispatchToProps = dispatch => ({
  onCreamentClick: num => dispatch({ type: 'CHENG', data: num })
})

class ReactReduxTest extends Component {
  render () {
    console.info(this.props)
    return (
      <div>
        <div>react-redux 测试</div>
        <div>chengChu-Reducer的age：{this.props.age}</div>
        <button
          onClick={() => {
            this.props.onCreamentClick(3)
          }}
        >
          乘
        </button>
      </div>
    )
  }
}

// 使用connect将ui组件转换为带状态的容器组件，
// 通过 mapStateToProps和mapDispatchToProps 将store中的数据和dispath注入到this.props中，
// 即使用react-redux后，不需要通过 store.getState() 和 store.dispath() 来进行管理，
// 并且不再需要使用 store.subscribe()来监听数据变化
export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxTest)
