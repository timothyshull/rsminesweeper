import { combineReducers } from 'redux'
import boardDescription from './boardDescription'
import board from './board'
import gameStatus from './gameStatus'
import leaders from './leaders'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
    boardDescription,
    board,
    gameStatus,
    leaders,
    visibilityFilter
});

export default rootReducer