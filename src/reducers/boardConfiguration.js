import * as ActionTypes from '../constants/ActionTypes'
import * as defaults from '../constants/index'
import {EXPERT_CONFIG} from "../constants/index";

const boardConfiguration = (state = EXPERT_CONFIG, action) => {
    switch (action.type) {
        case ActionTypes.SET_BEGINNER:
            return defaults.BEGINNER_CONFIG;
        case ActionTypes.SET_INTERMEDIATE:
            return defaults.INTERMEDIATE_CONFIG;
        case ActionTypes.SET_EXPERT:
            return defaults.EXPERT_CONFIG;
        default:
            return state
    }
};

export default boardConfiguration