import {CELL_STATES, DEFAULT_CELL, DEFAULT_MAX_BOMB_PERCENTAGE} from "../constants"
import {inBounds} from "../helpers"

// when passing a pre-generated board -> only updates the count cells in that case
// NOTE: no checks are performed to ensure width, height, and numBombs are correct when a pre-generated board is passed
class BoardGenerator {
    /**
     * NOTE: transpose width and height because 2d arrays are laid out so contiguous elements are in columns
     * we need contiguous elements to be in rows for display
     * this results in 0, 0 being the top left item in the grid
     * @param width
     * @param height
     * @param numBombs
     * @param inputBoard - optional
     */
    constructor(width, height, numBombs, inputBoard) {
        this.width = height;
        this.height = width;
        this.numCells = width * height;
        let maxBombs = Math.floor(this.numCells * DEFAULT_MAX_BOMB_PERCENTAGE);
        this.numBombs = numBombs < maxBombs ? numBombs : maxBombs; // ensure numBombs is a reasonable value

        if (typeof inputBoard === 'undefined') {
            this.board = [];
            this._generateBoard();
        } else {
            // should verify input values here
            this.board = inputBoard;
            this._updateEmptyCells();
        }
    }

    getBoard() {
        return this.board;
    }

    _generateBoard() {
        for (let i = 0; i < this.width; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.height; j++) {
                this.board[i].push(BoardGenerator._getCell(j, i));
            }
        }
        this._plantBombs();
        this._updateEmptyCells();
    }

    // ensures random distribution across board rather than randomly
    // setting state during cell creation in _generateBoard
    _plantBombs() {
        // just select between bomb or no bomb
        while (this.numBombs > 0) {
            const index = this._getRandomIndex();
            const coords = this._indexToCoordinates(index);
            let cell = this.board[coords[0]][coords[1]];
            if (cell.cellState !== CELL_STATES[9]) {
                cell.cellState = CELL_STATES[9];
                this.numBombs -= 1;
            }
        }
    }

    _updateEmptyCells() {
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                // if not a bomb
                if (this.board[i][j].cellState !== CELL_STATES[9]) {
                    this._setAdjacentBombCount(i, j);
                }
            }
        }
    }

    _setAdjacentBombCount(xPos, yPos) {
        let bombCount = 0;
        for (let i = -1; i < 2; ++i) {
            for (let j = -1; j < 2; ++j) {
                // if (i === 0 && j === 0) { continue; }
                let xPos2 = xPos + i;
                let yPos2 = yPos + j;
                if (this._inBounds(xPos2, yPos2) && this.board[xPos2][yPos2].cellState === CELL_STATES[9]) {
                    bombCount += 1;
                }
            }
        }
        this.board[xPos][yPos].cellState = CELL_STATES[bombCount];
    }

    _inBounds(xPos, yPos) {
        return inBounds(xPos, yPos, this.width, this.height);
    }

    _getRandomIndex() {
        return Math.floor(Math.random() * (this.numCells - 1));
    }

    _indexToCoordinates(index) {
        let yCoord = Math.floor(index / this.width);
        let xCoord = (index - (this.width * yCoord)) % this.width;
        return [xCoord, yCoord];
    }

    static _getCell(x, y) {
        return Object.assign({}, DEFAULT_CELL, {xPos: x, yPos: y});
    }
}

export default BoardGenerator