
import { combineReducers } from 'redux'
import jiaJian from './jiajianReducer'
import chengChu from './chengchuReducer'
// combineReducers  用来合并多个 reducer
export const rootReducer = combineReducers({
    jiaJian,
    chengChu
})
