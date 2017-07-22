import _ from 'lodash'
import {CELL_STATES} from "../constants/index";

export const isGameLost = board => (_.some(board, row => (_.some(row, cell => (cell.revealed && cell.cellState === CELL_STATES[9])))));
export const isGameWon = board => (_.every(board, row => (_.every(row, cell => ((!cell.revealed && cell.cellState === CELL_STATES[9]) || (cell.revealed && cell.cellState !== CELL_STATES[9]))))));
export const initialBoard = board => (_.every(board, row => (_.every(row, cell => (!cell.revealed)))));