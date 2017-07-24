import * as ActionTypes from '../constants/ActionTypes'
import * as defaults from '../constants/index'

const initialState = defaults.DEFAULT_STATUS;

const gameStatus = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GAME_LOST:
            return Object.assign({}, state, {gameComplete: true});
        case ActionTypes.GAME_WON:
            return Object.assign({}, state, {
                gameWon: true,
                gameComplete: true
            });
        default:
            return state
    }
};

export default gameStatus