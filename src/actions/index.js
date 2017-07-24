import * as ActionTypes from '../constants/ActionTypes'
import {DEFAULT_TIMER_INTERVAL} from "../constants/index"
import {isGameLost, isGameWon} from '../helpers/index'

// board actions
export const revealCell = cell => {
    return {
        type: ActionTypes.REVEAL_CELL,
        cell
    }
};

export const flagCell = cell => {
    // if cell.flagged, then decrement counter (flagCell called for already flagged cell means its unflagging cell)
    // else increment counter (NOTE: can verify does not pass config num bombs)
    return (dispatch, getState) => {
        const flagAction = cell.flagged ? ActionTypes.INCREMENT_COUNTER : ActionTypes.DECREMENT_COUNTER;
        const state = getState();
        return new Promise(resolve => {
            resolve(dispatch({type: ActionTypes.FLAG_CELL, cell}));
        }).then(dispatch({type: flagAction, state}));
    }
};

export const markAsQuestionable = cell => {
    return {
        type: ActionTypes.MARK_AS_QUESTIONABLE,
        cell
    }
};

export const revealAllCells = state => {
    return {
        type: ActionTypes.REVEAL_ALL_CELLS,
        state
    }
};

export const createNewBoard = () => {
    return (dispatch, getState) => {
        const state = getState();
        return new Promise(resolve => {
            resolve(dispatch(resetTimer(getState())));
        }).then(dispatch({type: ActionTypes.CREATE_NEW_BOARD, ...state.boardConfiguration}));
    }
};

// game actions
export const gameLost = gameStatus => {
    return {
        type: ActionTypes.GAME_LOST,
        gameStatus
    }
};

export const gameWon = gameStatus => {
    return {
        type: ActionTypes.GAME_WON,
        gameStatus
    }
};

// timer actions
export const startTimer = (dispatch, getState) => {
    const state = getState();
    const interval = setInterval(() => {
        dispatch({type: ActionTypes.INCREMENT_TIMER});
    }, DEFAULT_TIMER_INTERVAL);

    return {
        type: ActionTypes.START_TIMER,
        intervalId: interval,
        state
    };
};

export const stopTimer = (state) => {
    clearInterval(state.timer.intervalId);
    return {
        type: ActionTypes.STOP_TIMER,
        state
    };
};

export const resetTimer = (state) => {
    clearInterval(state.timer.intervalId);
    return {
        type: ActionTypes.RESET_TIMER,
        state
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

// configuration actions
export const setDifficulty = (difficulty) => {
    let action;
    switch (difficulty) {
        case 'beginner':
            action = ActionTypes.SET_BEGINNER;
            break;
        case 'intermediate':
            action = ActionTypes.SET_INTERMEDIATE;
            break;
        case 'expert':
            action = ActionTypes.SET_EXPERT;
            break;
        default:
            action = ActionTypes.SET_EXPERT;
    }
    return {type: action}
};
