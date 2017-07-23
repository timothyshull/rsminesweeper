import * as BoardActions from '../constants/BoardActions'
import * as defaults from '../constants/index'

const initialState = defaults.DEFAULT_COUNTER;

const bombCounter = (state = initialState, action) => {
    switch (action.type) {
        case BoardActions.INCREMENT_COUNTER:
            // return Object.assign({}, state, {gameComplete: true});
        case BoardActions.DECREMENT_COUNTER:
            // return Object.assign({}, state, {
            //     gameWon: true,
            //     gameComplete: true
            // });
        case BoardActions.RESET_COUNTER:
            break;
        default:
            return state
    }
};

export default bombCounter