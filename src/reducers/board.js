import _ from 'lodash'
import * as ActionTypes from '../constants/ActionTypes'
import BoardGenerator from '../helpers/BoardGenerator'
import * as defaults from '../constants/index'

// import * as testBoard from './testBoard.json'
// const initialState = testBoard;
const initialState = new BoardGenerator(defaults.DEFAULT_WIDTH, defaults.DEFAULT_HEIGHT, defaults.DEFAULT_NUM_BOMBS).getBoard();

const mapAndUpdate = (state, xPos, yPos, updates) => {

    return state.map(row => (row.map((cell) => {
        if (cell.xPos === xPos && cell.yPos === yPos) {
            return Object.assign({}, defaults.DEFAULT_CELL, cell, updates);
        }
        return cell;
    })));
};

// TODO: move to reuse here and in BoardGenerators
const inBounds = (xPos, yPos, xDim, yDim) => {
    return (0 <= xPos && xPos < xDim) && (0 <= yPos && yPos < yDim);
};

// TODO: clean this up
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
                        // console.dir(tmp);
                        toReveal.push(tmp); // TODO: check this
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

// TODO: more duplicate code removal
const board = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.REVEAL_CELL:
            // TODO: clean this up
            if (action.cell.cellState === defaults.CELL_STATES[0]) {
                let toReveal = revealAdjacent(state, action.cell);

                for (let elem of toReveal) {
                    state = mapAndUpdate(state, elem.xPos, elem.yPos, {revealed: true});
                }
                return state;
            }
            return mapAndUpdate(state, action.cell.xPos, action.cell.yPos, {revealed: true});
        case ActionTypes.FLAG_CELL:
            return mapAndUpdate(state, action.cell.xPos, action.cell.yPos, {flagged: !action.cell.flagged}); // toggle
        case ActionTypes.MARK_AS_QUESTIONABLE:
            return mapAndUpdate(state, action.cell.xPos, action.cell.yPos, {questionMarked: !action.cell.questionMarked}); // toggle
        case ActionTypes.REVEAL_ALL_CELLS:
            return state.map(row => (row.map((cell) => {
                return Object.assign({}, defaults.DEFAULT_CELL, cell, {revealed: true});
            })));
        case ActionTypes.CREATE_NEW_BOARD:
            return new BoardGenerator(defaults.DEFAULT_WIDTH, defaults.DEFAULT_HEIGHT, defaults.DEFAULT_NUM_BOMBS).getBoard();
        default:
            return state
    }
};

export default board