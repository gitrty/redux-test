// store 只不过通过 createStore 和 reducer 中的数据，来创建 redux 全局管理的状态
import { createStore } from 'redux'
import { rootReducer } from './reducer/'
export const store = createStore(rootReducer)

console.info(store)

