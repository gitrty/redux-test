import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import HomeA from './HomePage/HomeA'
import HomeB from './HomePage/HomeB'

export default class homePage extends Component {
    render() {
        return (
            <div>
                <div>我是homePage页面 - 二级路由 </div>
                <div>注意：有二级路由的页面，一级路由不能 使用 exact 精准匹配</div>
                <div>
                    <NavLink to="/homepage/homea" >HOMEAAA</NavLink> |
                    <NavLink to="/homepage/homeb">HOMEBBB</NavLink>

                    <Route path="/homepage/homea" component={HomeA} />
                    <Route path="/homepage/homeb" component={HomeB} />
                </div>
            </div>
        )
    }
}
