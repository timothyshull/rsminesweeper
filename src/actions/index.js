import * as BoardActions from '../constants/BoardActions'
import {isGameLost, isGameWon} from '../helpers/stateHelpers'
import * as GameStatuses from '../constants/GameStatuses'

// board actions
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

export const markAsQuestionable = cell => {
    return {
        type: BoardActions.MARK_AS_QUESTIONABLE,
        cell
    }
};

export const revealAllCells = state => {
    return {
        type: BoardActions.REVEAL_ALL_CELLS,
        state
    }
};

// game actions
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

// filter click actions to handle dispatch through a single point rather
// than passing many click handlers
// TODO: clean this pattern up
export const revealAndCheck = cell => {
    let actionFunc = revealCell;
    if (cell.modifier === 'flagged') {
        actionFunc = flagCell;
    } else if (cell.modifier === 'questionMarked') {
        actionFunc = markAsQuestionable;
    }
    return (dispatch, getState) => {
        const f1 = resolve => {
            resolve(dispatch(actionFunc(cell)))
        };
        const f2 = () => {
            const state = getState();
            if (isGameLost(state.board)) {
                dispatch(gameLost(state));
                dispatch(revealAllCells(state));
            } else if (isGameWon(state.board)) {
                dispatch(gameWon(state));
            }
        };
        return new Promise(f1).then(f2);
    };
};

// timer actions
export const startTimer = (baseTime = 0) => {
    return {
        type: BoardActions.START_TIMER,
        baseTime: baseTime,
        now: new Date().getTime()
    };
};

export const stopTimer = () => {
    return {
        type: BoardActions.STOP_TIMER,
        now: new Date().getTime()
    };
};

export const incrementTimer = () => {
    return {
        type: BoardActions.INCREMENT_TIMER,
        now: new Date().getTime()
    }
};

export const resetTimer = () => {
    return {
        type: BoardActions.RESET_TIMER,
        now: new Date().getTime()
    }
};

// counter actions
export const incrementCounter = () => {
    return {
        type: BoardActions.INCREMENT_COUNTER
    }
};

export const decrementCounter = () => {
    return {
        type: BoardActions.DECREMENT_COUNTER
    }
};

export const resetCounter = () => {
    return {
        type: BoardActions.RESET_COUNTER
    }
};

