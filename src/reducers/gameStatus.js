import * as BoardActions from '../constants/BoardActions'
import * as defaults from '../constants/index'

const initialState = defaults.DEFAULT_STATUS;

const gameStatus = (state = initialState, action) => {
    switch (action.type) {
        case BoardActions.REVEAL_CELL:
            // const xPos = action.cell.xPos;
            // const yPos = action.cell.yPos;
            // return state.map(row => (row.map((cell) => {
            //     if (cell.xPos === xPos && cell.yPos === yPos) {
            //         return Object.assign({}, defaults.DEFAULT_CELL, cell, {revealed: true});
            //     }
            //     return cell;
            // })));
        default:
            return state
    }
};

export default gameStatus