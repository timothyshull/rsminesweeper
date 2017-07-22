import React, {Component} from 'react';
import Cell from './Cell';
import {BOARD_PROPS} from '../constants/PropTypeDefs'
import './Board.css'

class Board extends Component {
    static propTypes = {
        board: BOARD_PROPS
    };

    render() {
        const board = this.props.board;
        if (board) {
            return (
                <table className="Board" cellSpacing={0} cellPadding={0}>
                    {board.map(row => {
                        return (
                            <tr>
                                {row.map((cell) => {
                                    cell.onClick = () => {
                                    };
                                    return (<Cell {...cell}/>);
                                })}
                            </tr>
                        )
                    })}
                </table>
            );
        }
        return (
            <table className="Board" cellSpacing={0} cellPadding={0}>&nbsp;</table>
        );
    }
}


// class Board extends Component {
//     getInitialState() {
//         return {
//             rows: this.props.rows,
//             isLost: this.props.isLost,
//             isWon: this.props.isWon
//         };
//     }
//
//     componentDidMount() {
//         fastclick.attach(document.body);
//         MinesweeperStore.addChangeListener(this._onChange, this);
//     }
//
//     render() {
//         let classes = React.addons.classSet({
//             'game-lost': this.state.isLost,
//             'game-won': this.state.isWon,
//             'title': true
//         });
//         let storeState = MinesweeperStore.getState();
//         let isRunning = !storeState.isLost && !storeState.isWon && !storeState.isFreshBoard;
//         let cells = _.flatten(this.state.rows);
//         let totalBombs = _.filter(cells, function (c) {
//             return c.isBomb
//         }).length;
//         let totalFlags = _.filter(cells, function (c) {
//             return c.isFlagged
//         }).length;
//         return (
//             <div>
//                 <div id='header'>
//                     <span className="bombs-remaining digital">{totalBombs - totalFlags}</span>
//                     <h3>
//                         <span onClick={this.resetSmaller} className='size-control'>-</span>
//                         <span onClick={this.reset} title='Reset' className={classes}>Sweeper</span>
//                         <span onClick={this.resetBigger} className='size-control'>+</span>
//                     </h3>
//                     <Timer isRunning={isRunning}/>
//                 </div>
//                 <table>
//                     <tbody>
//                     {this.getRows()}
//                     </tbody>
//                 </table>
//                 <div id='footer'>
//                     <form onSubmit={this.showHelp}>
//                         <button id='help-btn'>Halp!</button>
//                     </form>
//                     <a target='_blank' href='http://github.com/willpiers/react-minesweeper'>
//                         <img id='github-logo' src='src/images/github.png'/>
//                     </a>
//                 </div>
//             </div>
//         );
//     }
//
//     showHelp(e) {
//         e.preventDefault();
//         alert("The purpose of the game is to open all the cells of the board which do not contain a bomb.\n\nYou lose if you set off a bomb cell.\n\nEvery non-bomb cell you open will tell you the total number of bombs in the eight neighboring cells.\n\nOnce you are sure that a cell contains a bomb, you can right-click to put a flag it on it as a reminder.\n\nTo start a new game (abandoning the current one), just click on the text that says 'Sweeper' at the top.\n\nUse the \"+\" and \"-\" buttons to change the size of the board.\n\n\nHappy mine hunting!");
//     }
//
//     getRows() {
//         let me = this;
//         return _.map(this.state.rows, function (row) {
//             return (
//                 <tr>
//                     {me.getCells(row)}
//                 </tr>
//             );
//         })
//     }
//
//     getCells(row) {
//         let me = this;
//         return _.map(row, function (cellInfo) {
//             return me.getCellComponent(cellInfo);
//         });
//     }
//
//     getCellComponent(info) {
//         return <Cell isBomb={info.isBomb}
//                      isClicked={info.isClicked}
//                      isFlagged={info.isFlagged}
//                      bombCount={info.bombCount}
//                      location={info.location}
//                      onRightClick={this.cellRightClicked}
//                      onOpen={this.cellClicked}/>;
//     }
//
//     _onChange() {
//         let state = MinesweeperStore.getState()
//         this.setState({
//             rows: state.rows,
//             isLost: state.isLost,
//             isWon: state.isWon
//         }, function () {
//             let board = this.getDOMNode().parentNode;
//             board.style.width = (this.state.rows.length * 31 + 1).toString() + "px";
//         });
//     }
//
//     cellClicked(location) {
//         CellActionCreators.receiveClick(location);
//     }
//
//     cellRightClicked(location) {
//         CellActionCreators.receiveRightClick(location);
//     }
//
//     reset(e) {
//         e.preventDefault();
//         BoardActionCreators.receiveReset(this.state.rows.length);
//     }
//
//     resetBigger(e) {
//         e.preventDefault();
//         BoardActionCreators.receiveReset(this.state.rows.length + 1);
//     }
//
//     resetSmaller(e) {
//         e.preventDefault();
//         BoardActionCreators.receiveReset(this.state.rows.length - 1);
//     }
// }

export default Board
