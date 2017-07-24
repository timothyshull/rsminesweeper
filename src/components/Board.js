import React, {Component} from 'react';
import {connect} from 'react-redux'
import Cell from './Cell';
import '../containers/BoardContainer.css'


const noopHandler = (e) => {
    e.preventDefault()
};

class Board extends Component {
    getTableMarkup() {
        const cellMapper = (cell) => (<Cell {...{...cell, ...{onClick: noopHandler}}}/>);
        const rowMapper = row => ((<tr>{row.map(cellMapper)}</tr>));
        return (this.props.board.map(rowMapper))
    }

    render() {
        return (
            <table className="Board" onContextMenu={noopHandler} onDrag={noopHandler} onDragStart={noopHandler}
                   cellSpacing={0} cellPadding={0}>{this.getTableMarkup()}</table>
        );
    }
}

const mapStateToProps = state => ({
    board: state.board
});

export default connect(
    mapStateToProps
)(Board)
