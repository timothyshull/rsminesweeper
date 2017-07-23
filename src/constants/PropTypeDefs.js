import PropTypes from 'prop-types'
import {CELL_STATES} from './index'


export const CELL_PROPS = {
    onClick: PropTypes.func.isRequired,
    xPos: PropTypes.number.isRequired,
    yPos: PropTypes.number.isRequired,
    revealed: PropTypes.bool.isRequired,
    flagged: PropTypes.bool.isRequired,
    questionMarked: PropTypes.bool.isRequired,
    cellState: PropTypes.oneOf(CELL_STATES).isRequired
};

export const BOARD_ROW_PROPS = PropTypes.arrayOf(PropTypes.shape(CELL_PROPS).isRequired);

export const BOARD_PROPS = PropTypes.arrayOf(BOARD_ROW_PROPS).isRequired;

export const LEADER_PROPS = {
    rank: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired
};

export const LEADERS_LIST_PROPS = PropTypes.arrayOf(PropTypes.shape(LEADER_PROPS).isRequired).isRequired;

export const TIMER_PROPS = PropTypes.shape({currentTime: PropTypes.number.isRequired}).isRequired;

export const APP_PROPS = PropTypes.shape({
    config: PropTypes.object.isRequired,
    board: PropTypes.array.isRequired,
    leaders: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
});
