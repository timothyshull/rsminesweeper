import React, {Component} from 'react';
import BombCounter from './BombCounter'
import ConfigurationMenu from './ConfigurationMenu'
import Cell from './Cell';
import Timer from './Timer'
import {BOARD_PROPS} from '../constants/PropTypeDefs'
import './Board.css'
import ResetButton from "./ResetButton";

// TODO: convert to container
class Board extends Component {
    render() {
        const board = this.props.board;
        const noopEventHandler = (e) => {
            e.preventDefault()
        };
        if (board) {
            return (
                <div className="Board">
                    <div className="BoardHeader">
                        <BombCounter/>
                        <ResetButton/>
                        <Timer/>
                    </div>
                    <table onContextMenu={noopEventHandler} onDrag={noopEventHandler} onDragStart={noopEventHandler}
                           className="Board" cellSpacing={0} cellPadding={0}>
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
                    <ConfigurationMenu/>
                </div>
            );
        }
        return (
            <table className="Board" cellSpacing={0} cellPadding={0}>&nbsp;</table>
        );
    }


}

Board.propTypes = BOARD_PROPS;

export default Board
