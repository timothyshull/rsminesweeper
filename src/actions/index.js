import * as BoardActions from '../constants/BoardActions'
import {isGameLost, isGameWon} from '../helpers/stateHelpers'
import * as GameStatuses from '../constants/GameStatuses'

// export const getCell = cell => {
//     return {
//         xPos: 0,
//         yPos: 0,
//         revealed: false
//     }
// };


export const checkStatus = state => {
    return {
        type: BoardActions.CHECK_STATUS,
        state
    };
};

export const revealCell = cell => {
    return {
        type: BoardActions.REVEAL_CELL,
        cell
    }
};

export const gameLost = gameStatus => {
    return {
        type: GameStatuses.GAME_LOST,
        gameStatus
    }
};

export const gameWon = gameStatus => {
    return {
        type: GameStatuses.GAME_WON,
        gameStatus
    }
};

export const revealAndCheck = cell => {
    return (dispatch, getState) => {
        const f1 = resolve => {
            resolve(dispatch(revealCell(cell)))
        };
        const f2 = () => {
            const state = getState();
            if (isGameLost(state.board)) {
                dispatch(gameLost(state));
            } else if (isGameWon(state.board)) {
                dispatch(gameWon(state));
            }
        };
        return new Promise(f1).then(f2);
    };
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





