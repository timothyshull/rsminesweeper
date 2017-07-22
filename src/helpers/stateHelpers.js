import _ from 'lodash'
import {CELL_STATES} from "../constants/index";

export const gameLost = board => (_.any(board, row => (_.any(row, cell => (cell.revealed && cell.cellState === CELL_STATES[9])))));
export const gameWon = board => (_.all(board, row => (_.all(row, cell => ((!cell.revealed && cell.cellState === CELL_STATES[9]) || (cell.revealed && cell.cellState !== CELL_STATES[9]))))));
export const initialBoard = board => (_.all(board, row => (_.all(row, cell => (!cell.revealed)))));