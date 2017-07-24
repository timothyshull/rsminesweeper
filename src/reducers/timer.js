import * as ActionTypes from '../constants/ActionTypes'
import {DEFAULT_TIMER} from '../constants'

const timer = (state = DEFAULT_TIMER, action) => {
    switch (action.type) {
        case ActionTypes.RESET_TIMER:
            return {
                ...state,
                running: false,
                currentTime: 0,
                intervalId: undefined
            };
        case ActionTypes.START_TIMER:
            return {
                ...state,
                running: true,
                intervalId: action.intervalId
            };
        case ActionTypes.INCREMENT_TIMER:
            return {
                ...state,
                running: true,
                currentTime: state.currentTime + 1
            };
        case ActionTypes.STOP_TIMER:
            return {
                ...state,
                running: false
            };
        default:
            return state;
    }
};

export default timer
