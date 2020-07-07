import React, {
  useState  // react 中 hook 的使用
} from 'react';
import './App.css';
import Home from './component/Home'
import {
  withRouter  // 高级组件（参数是一个组件，返回值也是一个组件），可以让不是路由切换的组件也具有路由属性，使用方法:包裹在导出的组件外
} from 'react-router-dom'



function App(props) {
  // 使用 withRouter 高阶组件后，props中会附带路由信息（可在控制用户状态时使用）
  console.info(props)

  // useState 可以在函数组件中使用 状态 - 多个状态时，建议创建多个useState()
  let [val, setVal] = useState(0)
  // let [val1, setVal1] = useState(1)
  // let [val2, setVal2] = useState(2)

  return (
    <div className="App">
      {val}
      <button onClick={() => { setVal(++val) }}>点我修改val</button>
      <Home />
    </div>
  );
}

export default withRouter(App);
