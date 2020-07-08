import React, { Component } from 'react'
import Son from './Son'
import Son2 from './Son2'
import HomePage from './HomePage'
import ReduxTest from './ReduxTest'
import ReactReduxTest from './ReactReduxTest'
import Hooks from './Hooks'
import {
  Route, // 路由视图
  // Link,  // 路由导航
  NavLink, // 会在切换到改路由时添加 active 类名,其他功能和Link一样 - 保证当前选中的导航栏刷新时选中样式对应
  Switch, // 在有相同路由时，防止两个路由组件重复渲染
  Redirect, // 重定向组件
  withRouter
} from 'react-router-dom'

class Home extends Component {
  funnn(name) {
    console.info(name)
  }

  render() {
    return (
      <div>
        我是Home组件
        {/* <Son fun={this.funnn} />
                <Son2  /> */}
        {/* 组件式跳转 */}
        <NavLink to='/son'>NavLink - son</NavLink>|||
        <NavLink to='/son2'>NavLink - son22</NavLink>|||
        <NavLink to='/homepage'>NavLink - HomePage</NavLink> |||
        <NavLink to='/redux'>NavLink - Redux</NavLink> |||
        <NavLink to='/reactredux'>NavLink - React-Redux</NavLink> |||
        <NavLink to='/hooks'>NavLink - React-Hooks</NavLink> |||
        {/* 编程式跳转 */}
        <button
          onClick={() => {
            this.props.history.push('/homepage')
          }}
        >
          点我跳转HomePage
        </button>
        <Switch>
          {/* 
            exact - 精准匹配：只有当路径为/时才会匹配，不写则在其他路由页面也会匹配 / 路由 
            添加了 exact 匹配的路由，子路由不会生效！！！！！！！！！！！！！！！
        */}
          <Route path='/homepage' component={HomePage}></Route>
          <Route path='/son' exact component={Son}></Route>
          <Route path='/son2' component={Son2}></Route>
          <Route path='/son2' component={Son2}></Route>
          <Route path='/redux' component={ReduxTest}></Route>
          <Route path='/reactredux' component={ReactReduxTest}></Route>
          <Route path='/hooks' component={Hooks}></Route>
          <Redirect from='/redirect' to='son' exact></Redirect>
        </Switch>
      </div>
    )
  }
}

export default withRouter(Home)
