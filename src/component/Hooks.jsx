import React, { useState, useEffect } from 'react'

function Hooks() {
    // 一 - useState 代替 类组件中state状态
    const [count, setCount] = useState(18)

    // 二 - useEffect 代替类组件中 生命周期函数
    // 1.useEffect接收一个参数时，为一个函数，会同时触发 相当于类组件中  componentDidMount(挂载后) + componentDidUpdate(更新后) 这个两个生命周期的触发
    // useEffect(() => {
    //     console.info('触发useEffect-------------' + count)
    // })

    // 2.useEffect接收两个参数时，第二个参数为一个数组
    // useEffect(() => {
    //     console.info('触发useEffect-------------' + count)
    //     return () => { console.info('hooks组件销毁') }   
    // }, [])
    //  当第二个参数为空数组时，组件state数据更新时不会触发 useEffect，并且return出的函数为组件销毁时(相当于类组件中componentWillUnmount)触发的函数

    // 3.useEffect接收的第二个参数为一个数组，此数组中可以放入 state 管理的数据，表示监听数组中的state，当有监听的state 发生改变时，会触发useEffect 函数
    useEffect(() => {
        console.info('触发useEffect-------------------' + count)
    }, [count])

    // 注意：useEffect 只有在第二个参数为空数组时，return 出的函数可以表示 组件销毁钩子，若不为空数组，则在监听的state发生变化时，就会触发return出的函数

    return (
        <div>
            天天的年龄为：{count}
            <button onClick={() => { setCount(count + 1) }}>变大1岁</button>
        </div>
    )
}

export default Hooks