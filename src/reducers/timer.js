import * as BoardActions from '../constants/BoardActions'
import {DEFAULT_TIMER} from '../constants'

const timer = (state = DEFAULT_TIMER, action) => {
    switch (action.type) {
        case BoardActions.RESET_TIMER:
            return {
                ...state,
                running: false,
                currentTime: 0,
                intervalId: undefined
            };
        case BoardActions.START_TIMER:
            return {
                ...state,
                running: true,
                intervalId: action.intervalId
            };
        case BoardActions.INCREMENT_TIMER:
            return {
                ...state,
                running: true,
                currentTime: state.currentTime + 1
            };
        case BoardActions.STOP_TIMER:
            return {
                ...state,
                running: false
            };
        default:
            return state;
    }
};

export default timer
