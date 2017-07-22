import * as BoardActions from '../constants/BoardActions'
import BoardGenerator from '../helpers/BoardGenerator'
import * as defaults from '../constants/index'

// import * as testBoard from './testBoard.json'
// const initialState = testBoard;
const initialState = new BoardGenerator(defaults.DEFAULT_WIDTH, defaults.DEFAULT_HEIGHT, defaults.DEFAULT_NUM_BOMBS).getBoard();

const board = (state = initialState, action) => {
    switch (action.type) {
        case BoardActions.REVEAL_CELL:
            const xPos = action.cell.xPos;
            const yPos = action.cell.yPos;
            return state.map(row => (row.map((cell) => {
                if (cell.xPos === xPos && cell.yPos === yPos) {
                    return Object.assign({}, defaults.DEFAULT_CELL, cell, {revealed: true});
                }
                return cell;
            })));
        default:
            return state
    }
};

export default board