import {CELL_STATES, DEFAULT_CELL, DEFAULT_MAX_BOMB_PERCENTAGE} from "../constants/index"

// TODO: x and y coords are messed up here
class BoardGenerator {
    constructor(width, height, numBombs) {
        this.width = width;
        this.height = height;
        this.numCells = width * height;
        let maxBombs = Math.floor(this.numCells * DEFAULT_MAX_BOMB_PERCENTAGE);
        this.numBombs = numBombs < maxBombs ? numBombs : maxBombs; // ensure numBombs is a reasonable value
        this.board = [];
        this._generateBoard();
    }

    getBoard() {
        return this.board;
    }

    _generateBoard() {
        // TODO: this indexing is confusing, check
        for (let i = 0; i < this.height; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.width; j++) {
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
            // TODO: x and y here
            let cell = this.board[coords[1]][coords[0]];
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
                // TODO: x and y here
                if (this.board[j][i].cellState !== CELL_STATES[9]) {
                    this._setAdjacentBombCount(i, j);
                }
            }
        }
    }

    // TODO: here
    _setAdjacentBombCount(xPos, yPos) {
        let bombCount = 0;
        for (let i = -1; i < 2; ++i) {
            for (let j = -1; j < 2; ++j) {
                let xPos2 = xPos + i;
                let yPos2 = yPos + j;
                if (this._inBounds(xPos2, yPos2) && this.board[yPos2][xPos2].cellState === CELL_STATES[9]) {
                    bombCount += 1;
                }
            }
        }
        // TODO: here
        this.board[yPos][xPos].cellState = CELL_STATES[bombCount];
    }

    _inBounds(xPos, yPos) {
        return (0 <= xPos && xPos < this.width) && (0 <= yPos && yPos < this.height);
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
        let cell = Object.create(DEFAULT_CELL);
        cell.xPos = x;
        cell.yPos = y;

        // cell.cellState = this._isBomb();
        return cell;
    }
}

export default BoardGenerator