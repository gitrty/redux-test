//  reducer 存放数据，以及通过 dispatch 触发的函数

let obj = {
    name: 'toyo',
    age: 18
}

export default (state = obj, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state, age: state.age + action.data
            }
        case 'DEL':
            return {
                ...state, age: state.age - action.data
            }
        default:
            return state
    }
}