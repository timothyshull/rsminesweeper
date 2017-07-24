import _ from 'lodash'
import {CELL_STATES} from "../constants/index";


// isGameLost helpers
const _gameLostInnerCell = cell => (cell.revealed && cell.cellState === CELL_STATES[9]);
const _gameLostInner = row => (_.some(row, _gameLostInnerCell));

export const isGameLost = board => (_.some(board, _gameLostInner));


// isGameWon helpers
const _gameWonInnerCell = cell => ((!cell.revealed && cell.cellState === CELL_STATES[9])
    || (cell.revealed && cell.cellState !== CELL_STATES[9]));
const _gameWonInner = row => (_.every(row, _gameWonInnerCell));

export const isGameWon = board => (_.every(board, _gameWonInner));


// check in bounds for 2D array elements
export const inBounds = (xPos, yPos, xDim, yDim) => {
    return (0 <= xPos && xPos < xDim) && (0 <= yPos && yPos < yDim);
};