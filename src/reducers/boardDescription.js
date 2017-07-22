import * as ConfigurationActions from '../constants/ConfigurationActions'

import {DEFAULT_CONFIG} from "../constants/index";

const boardDescription = (state = DEFAULT_CONFIG, action) => {
    switch (action.type) {
        case ConfigurationActions.CREATE_NEW_BOARD:
        case ConfigurationActions.SET_DIFFICULTY:
        case ConfigurationActions.TOGGLE_NIGHT_MODE:
        case ConfigurationActions.ZOOM_IN:
        case ConfigurationActions.ZOOM_OUT:
        default:
            return state
    }
};

export default boardDescription