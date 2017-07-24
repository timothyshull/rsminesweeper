import * as ConfigurationActions from '../constants/ConfigurationActions'

import {DEFAULT_CONFIG} from "../constants/index";

const boardConfiguration = (state = DEFAULT_CONFIG, action) => {
    switch (action.type) {
        case ConfigurationActions.SET_DIFFICULTY:
            return state;
        default:
            return state
    }
};

export default boardConfiguration