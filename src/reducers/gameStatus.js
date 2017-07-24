import * as ActionTypes from '../constants/ActionTypes'
import * as defaults from '../constants/index'

const initialState = defaults.DEFAULT_STATUS;

const gameStatus = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GAME_LOST:
            return {
                gameWon: false,
                gameComplete: true
            };
        case ActionTypes.GAME_WON:
            return {
                gameWon: true,
                gameComplete: true
            };
        case ActionTypes.CREATE_NEW_BOARD:
            return {
                gameWon: false,
                gameComplete: false
            };
        default:
            return state
    }
};

export default gameStatus