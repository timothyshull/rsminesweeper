import * as ActionTypes from '../constants/ActionTypes'
import * as defaults from '../constants/index'

const initialState = defaults.DEFAULT_COUNTER;

const bombCounter = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT_COUNTER:
            return {bombsRemaining: state.bombsRemaining + 1};
        case ActionTypes.DECREMENT_COUNTER:
            return {bombsRemaining: state.bombsRemaining - 1 >= 0 ? state.bombsRemaining - 1 : 0};
        case ActionTypes.SET_BEGINNER:
            return {bombsRemaining: defaults.BEGINNER_CONFIG.numBombs};
        case ActionTypes.SET_INTERMEDIATE:
            return {bombsRemaining: defaults.INTERMEDIATE_CONFIG.numBombs};
        case ActionTypes.SET_EXPERT:
            return {bombsRemaining: defaults.EXPERT_CONFIG.numBombs};
        case ActionTypes.CREATE_NEW_BOARD:
            return {bombsRemaining: action.numBombs};
        default:
            return state
    }
};

export default bombCounter