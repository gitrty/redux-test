//  reducer 存放数据，以及通过 dispatch 触发的函数

let obj = {
    name: 'tiantian',
    age: 22
}

export default (state = obj, action) => {
    switch (action.type) {
        case 'CHENG':
            return {
                ...state, age: state.age * action.data
            }
        case 'CHU':
            console.info('chu')
            return {
                ...state, age: state.age / action.data
            }
        default:
            return state
    }
}

