import * as ActionTypes from '../constants/ActionTypes'
import {DEFAULT_TIMER_INTERVAL} from "../constants/index"
import {isGameLost, isGameWon} from '../helpers/index'

// board actions
/**
 * simply reveals an unrevealed cell
 * @param cell
 * @returns {{type, cell: *}}
 */
export const revealCell = cell => {
    return {
        type: ActionTypes.REVEAL_CELL,
        cell
    }
};

/**
 * FLAG_CELL toggles a flagged cell inside the reducer
 * this action creator initiates toggling of flagged prop then increments or decrements the counter accordingly
 * @param cell -> the target of the flag operation
 * @returns {function(*, *)}
 */
export const flagCell = cell => {
    return (dispatch, getState) => {
        const flagAction = cell.flagged ? ActionTypes.INCREMENT_COUNTER : ActionTypes.DECREMENT_COUNTER;
        const state = getState();
        return new Promise(resolve => {
            resolve(dispatch({type: ActionTypes.FLAG_CELL, cell}));
        }).then(dispatch({type: flagAction, state}));
    }
};

/**
 * adds a question mark icon to a cell
 * @param cell
 * @returns {{type, cell: *}}
 */
export const markAsQuestionable = cell => {
    return {
        type: ActionTypes.MARK_AS_QUESTIONABLE,
        cell
    }
};

/**
 * reveals all of the cells on the entire board
 * @param state
 * @returns {{type, state: *}}
 */
export const revealAllCells = state => {
    return {
        type: ActionTypes.REVEAL_ALL_CELLS,
        state
    }
};

/**
 * creates a new game board based on the current state of the boardConfiguration data
 * @returns {function(*, *)}
 */
export const createNewBoard = () => {
    return (dispatch, getState) => {
        const state = getState();
        return new Promise(resolve => {
            resolve(dispatch(resetTimer(getState())));
        }).then(dispatch({type: ActionTypes.CREATE_NEW_BOARD, ...state.boardConfiguration}));
    }
};

// game actions
/**
 * called when a bomb is revealed
 * @param gameStatus
 * @returns {{type, gameStatus: *}}
 */
export const gameLost = gameStatus => {
    return {
        type: ActionTypes.GAME_LOST,
        gameStatus
    }
};

/**
 * called when all of the non-bomb cells are revealed
 * NOTE: not dependent on flags
 * @param gameStatus
 * @returns {{type, gameStatus: *}}
 */
export const gameWon = gameStatus => {
    return {
        type: ActionTypes.GAME_WON,
        gameStatus
    }
};

// timer actions
/**
 * starts the timer by triggering the non
 * @param dispatch
 * @param getState
 * @returns {{type, intervalId: number, state: *}}
 */
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

/**
 * @param state
 * @returns {{type, state: *}}
 */
export const stopTimer = (state) => {
    clearInterval(state.timer.intervalId);
    return {
        type: ActionTypes.STOP_TIMER,
        state
    };
};

/**
 * @param state
 * @returns {{type, state: *}}
 */
export const resetTimer = (state) => {
    clearInterval(state.timer.intervalId);
    return {
        type: ActionTypes.RESET_TIMER,
        state
    }
};

/**
 * used in _clickDispatchFactory to check the board status (e.g. won/lost) after modifying a cell
 * @param getState
 * @param dispatch
 */
const _gameCompletionHelper = (getState, dispatch) => (() => {
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

/**
 * returns a function that constructs a Promise to first start the timer if necessary, then call the appropriate cell
 * modifying (e.g. reveal, flag, question) action, and then check if the game status has changed
 * @param actionFunc
 * @param cell
 * @returns {function(*=, *=)}
 */
const _clickDispatchFactory = (actionFunc, cell) => {
    return (dispatch, getState) => {
        return new Promise(resolve => {
            if (!getState().timer.running) {
                dispatch(startTimer(dispatch, getState));
            }
            resolve();
        }).then(() => {
            dispatch(actionFunc(cell))
        }).then(_gameCompletionHelper(getState, dispatch));
    }
};

// filter click actions to handle dispatch through a single point rather
// than passing many click handlers
/**
 * this function is the main entry point for action handling when a cell is clicked
 * the calling click handler (in Cell) adds a .modifier field that signifies if the click was to reveal, flag, or
 * add a question mark
 * the result is called through the above helper functions
 * @param cell
 */
export const revealAndCheck = cell => {
    let actionFunc = revealCell;
    if (cell.modifier === 'flagged') {
        actionFunc = flagCell;
    } else if (cell.modifier === 'questionMarked') {
        actionFunc = markAsQuestionable;
    }
    return _clickDispatchFactory(actionFunc, cell);
};

// configuration actions
/**
 * reads the passed difficulty and triggers the corresponding event for the reducer
 * @param difficulty
 * @returns {{type: *}}
 */
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
