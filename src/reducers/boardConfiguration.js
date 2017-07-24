import * as ActionTypes from '../constants/ActionTypes'

import {DEFAULT_CONFIG} from "../constants/index";

const boardConfiguration = (state = DEFAULT_CONFIG, action) => {
    switch (action.type) {
        case ActionTypes.SET_DIFFICULTY:
            return state;
        default:
            return state
    }
};

export default boardConfiguration