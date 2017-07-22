import * as BoardActions from '../constants/BoardActions'

// export const getCell = cell => {
//     return {
//         xPos: 0,
//         yPos: 0,
//         revealed: false
//     }
// };


export const revealCell = cell => {
    return {
        type: BoardActions.REVEAL_CELL,
        cell
    }
};

export const flagCell = cell => {
    return {
        type: BoardActions.FLAG_CELL,
        cell
    }
};

export const revealAllAdjacent = cell => {
    return {
        type: BoardActions.REVEAL_ALL_ADJACENT,
        cell
    }
};





