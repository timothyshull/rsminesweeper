import PropTypes from 'prop-types'
import {CELL_STATES} from './index'

// TODO: combine any single defs that just use onClick

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

export const TIMER_PROPS = PropTypes.shape({
    running: PropTypes.bool.isRequired,
    currentTime: PropTypes.number.isRequired,
    intervalId: PropTypes.number.isRequired
}).isRequired;

export const BOMB_COUNTER_PROPS = PropTypes.shape({numBombs: PropTypes.number.isRequired}).isRequired;

export const APP_PROPS = PropTypes.shape({
    config: PropTypes.object.isRequired,
    board: PropTypes.array.isRequired,
    leaders: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
});

export const ON_CLICK_PROPS = {
    onClick: PropTypes.func.isRequired
};
