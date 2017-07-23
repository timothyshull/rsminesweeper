import { combineReducers } from 'redux'
import boardDescription from './boardDescription'
import board from './board'
import gameStatus from './gameStatus'
import timer from './timer'
import bombCounter from './bombCounter'

const rootReducer = combineReducers({
    boardDescription,
    board,
    gameStatus,
    timer,
    bombCounter
});

export default rootReducer