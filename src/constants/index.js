export const CELL_STATES = ['empty', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'bomb'];

// defaults
export const DEFAULT_WIDTH = 30;
export const DEFAULT_HEIGHT = 16;
export const DEFAULT_NUM_BOMBS = 99;

const MILLIS_PER_SEC = 1000;
export const DEFAULT_TIMER_INTERVAL = 1 * MILLIS_PER_SEC;

export const DEFAULT_CONFIG = {
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    numBombs: DEFAULT_NUM_BOMBS
};

export const DEFAULT_STATUS = {
    gameComplete: false,
    gameWon: false
};

export const DEFAULT_COUNTER = {
    numBombs: DEFAULT_NUM_BOMBS
};

export const DEFAULT_TIMER = {
    running: false,
    currentTime: 0,
    intervalId: undefined
};

export const DEFAULT_CELL = {
    xPos: 0,
    yPos: 0,
    revealed: false,
    flagged: false,
    questionMarked: false,
    cellState: CELL_STATES[0]
};

export const DEFAULT_MAX_BOMB_PERCENTAGE = .90;