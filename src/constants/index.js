export const CELL_STATES = ['empty', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'bomb'];

export const DEFAULT_WIDTH = 30;
export const DEFAULT_HEIGHT = 16;
export const DEFAULT_NUM_BOMBS = 99;

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
    currentTime: 0
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