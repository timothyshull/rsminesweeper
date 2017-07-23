import * as BoardActions from '../constants/BoardActions'
import {DEFAULT_TIMER_INTERVAL} from "../constants/index"
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
    // if cell.flagged, then decrement counter (flagCell called for already flagged cell means its unflagging cell)
    // else increment counter (NOTE: can verify does not pass config num bombs)
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

// timer actions
export const startTimer = (dispatch, getState) => {
    const state = getState();
    const interval = setInterval(() => {
        dispatch({type: BoardActions.INCREMENT_TIMER});
    }, DEFAULT_TIMER_INTERVAL);

    return {
        type: BoardActions.START_TIMER,
        intervalId: interval,
        state
    };
};

export const stopTimer = (state) => {
    clearInterval(state.timer.intervalId);
    return {
        type: BoardActions.STOP_TIMER,
        state
    };
};

export const incrementTimer = (timerInfo) => {
    return {
        type: BoardActions.INCREMENT_TIMER,
        timerInfo
    }
};

export const resetTimer = (timerInfo) => {
    return {
        type: BoardActions.RESET_TIMER,
        timerInfo
    }
};

const gameCompletionFactory = (getState, dispatch) => (() => {
        const state = getState();
        const gameIsLost = isGameLost(state.board);
        const gameIsWon = isGameWon(state.board);

        if (gameIsLost) {
            dispatch(gameLost(state));
            dispatch(revealAllCells(state));
        } else if (gameIsWon) {
            dispatch(gameWon(state));
        }

        if (gameIsLost || gameIsWon) {
            dispatch(stopTimer(state));
        }
    }
);

const clickDispatchFactory = (actionFunc, cell) => {
    return (dispatch, getState) => {
        return new Promise(resolve => {
            if (!getState().timer.running) {
                dispatch(startTimer(dispatch, getState));
            }
            resolve();
        }).then(() => {
            dispatch(actionFunc(cell))
        }).then(gameCompletionFactory(getState, dispatch));
    }
};

// filter click actions to handle dispatch through a single point rather
// than passing many click handlers
export const revealAndCheck = cell => {
    let actionFunc = revealCell;
    if (cell.modifier === 'flagged') {
        actionFunc = flagCell;
    } else if (cell.modifier === 'questionMarked') {
        actionFunc = markAsQuestionable;
    }
    return clickDispatchFactory(actionFunc, cell);
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

