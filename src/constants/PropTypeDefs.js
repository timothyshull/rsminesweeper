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

export const ON_CLICK_PROPS = {
    onClick: PropTypes.func.isRequired
};
