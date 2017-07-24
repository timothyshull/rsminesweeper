import * as ActionTypes from '../constants/ActionTypes'
import * as defaults from '../constants/index'

const initialState = defaults.DEFAULT_COUNTER;

const bombCounter = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT_COUNTER:
            // return Object.assign({}, state, {gameComplete: true});
        case ActionTypes.DECREMENT_COUNTER:
            // return Object.assign({}, state, {
            //     gameWon: true,
            //     gameComplete: true
            // });
        case ActionTypes.RESET_COUNTER:
            break;
        default:
            return state
    }
};

export default bombCounter