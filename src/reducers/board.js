import _ from 'lodash'
import * as ActionTypes from '../constants/ActionTypes'
import BoardGenerator from '../helpers/BoardGenerator'
import * as defaults from '../constants/index'
import {inBounds} from "../helpers/index"

/**
 * to test manually:
 * import * as testBoard from './testBoard.json'
 * const initialState = new BoardGenerator(2, 2, 1, testBoard).getBoard();
 */
const initialState = new BoardGenerator(
    defaults.DEFAULT_WIDTH,
    defaults.DEFAULT_HEIGHT,
    defaults.DEFAULT_NUM_BOMBS
).getBoard();

const mapAndUpdate = (state, cell, updates) => {
    const xPos = cell.xPos;
    const yPos = cell.yPos;
    const cellMapper = (cell) => {
        if (cell.xPos === xPos && cell.yPos === yPos) {
            return {...cell, ...updates};
        }
        return cell;
    };
    const rowMapper = (row) => (row.map(cellMapper));
    return state.map(rowMapper);
};

// NOTE: this would be much if using a simple hash map to match objects against conditions and subsequently pass to
// mapAndUpdate. I opted for this pattern to do something more functional.
const revealAdjacent = (state, cell) => {
    let toReveal = [];
    toReveal.push(cell);

    let toCheck = [];
    toCheck.push(cell);

    const xDim = state[0].length;
    const yDim = state.length;

    while (toCheck.length !== 0) {
        let currentCell = toCheck.pop();
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) { continue; }
                const xPos = currentCell.xPos + i;
                const yPos = currentCell.yPos + j;
                if (inBounds(xPos, yPos, xDim, yDim)) {
                    let tmp = state[yPos][xPos];
                    if (!_.find(toReveal, (trCell) => (trCell.xPos === tmp.xPos && trCell.yPos === tmp.yPos))) {
                        toReveal.push(tmp);
                        if (tmp.cellState === defaults.CELL_STATES[0]) {
                            toCheck.push(tmp);
                        }
                    }
                }
            }
        }
    }

    return toReveal;
};

const board = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.REVEAL_CELL:
            if (action.cell.cellState === defaults.CELL_STATES[0]) {
                let toReveal = revealAdjacent(state, action.cell);
                for (let elem of toReveal) {
                    state = mapAndUpdate(state, elem, {revealed: true});
                }
                return state;
            }
            return mapAndUpdate(state, action.cell, {revealed: true});
        case ActionTypes.FLAG_CELL:
            return mapAndUpdate(state, action.cell, {flagged: !action.cell.flagged}); // toggle
        case ActionTypes.MARK_AS_QUESTIONABLE:
            return mapAndUpdate(state, action.cell, {questionMarked: !action.cell.questionMarked}); // toggle
        case ActionTypes.REVEAL_ALL_CELLS:
            return state.map(row => (row.map(cell => ({...defaults.DEFAULT_CELL, ...cell, revealed: true}))));
        case ActionTypes.CREATE_NEW_BOARD:
            return new BoardGenerator(
                action.width,
                action.height,
                action.numBombs
            ).getBoard();
        // NOTE: these actions are also handled in boardConfiguration.js -> scattering handling like this is
        // difficult to maintain
        case ActionTypes.SET_BEGINNER:
            return new BoardGenerator(
                defaults.BEGINNER_CONFIG.width,
                defaults.BEGINNER_CONFIG.height,
                defaults.BEGINNER_CONFIG.numBombs
            ).getBoard();
        case ActionTypes.SET_INTERMEDIATE:
            return new BoardGenerator(
                defaults.INTERMEDIATE_CONFIG.width,
                defaults.INTERMEDIATE_CONFIG.height,
                defaults.INTERMEDIATE_CONFIG.numBombs
            ).getBoard();
        case ActionTypes.SET_EXPERT:
            return new BoardGenerator(
                defaults.EXPERT_CONFIG.width,
                defaults.EXPERT_CONFIG.height,
                defaults.EXPERT_CONFIG.numBombs
            ).getBoard();
        default:
            return state
    }
};

export default board