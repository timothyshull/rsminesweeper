import {combineReducers} from 'redux'
import boardConfiguration from './boardConfiguration'
import board from './board'
import gameStatus from './gameStatus'
import timer from './timer'
import bombCounter from './bombCounter'

const rootReducer = combineReducers({
    boardConfiguration,
    board,
    gameStatus,
    timer,
    bombCounter
});

export default rootReducer