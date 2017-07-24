import React, {Component} from 'react';
import {connect} from 'react-redux'
import Cell from './Cell';
import './Board.css'


const noopHandler = (e) => {
    e.preventDefault()
};

class Board extends Component {
    getTableMarkup() {
        const cellMapper = (cell, index) => (<Cell key={"cell" + index} {...{...cell, ...{onClick: noopHandler}}}/>);
        const rowMapper = (row, index) => ((<tr key={"row" + index}>{row.map(cellMapper)}</tr>));
        return (this.props.board.map(rowMapper))
    }

    render() {
        return (
            <div className="Board">
                <table onContextMenu={noopHandler} onDrag={noopHandler} onDragStart={noopHandler}
                       cellSpacing={0} cellPadding={0}><tbody>{this.getTableMarkup()}</tbody></table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    board: state.board
});

export default connect(
    mapStateToProps
)(Board)
