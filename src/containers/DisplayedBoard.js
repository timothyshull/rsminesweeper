import {connect} from 'react-redux'
import {revealCell, revealAllAdjacent} from '../actions/index'
import Board from '../components/Board'

// TODO: fix this
const getRevealedCells = (cells, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return cells;
        case 'SHOW_COMPLETED':
            return cells.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return cells.filter(t => !t.completed);
        default:
            return cells;
    }
};

const mapStateToProps = state => {
    return {
        cells: getRevealedCells(state.cells, state.visibilityFilter)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onCellClick: id => {
            dispatch(revealCell(id))
        }
    }
};

const DisplayedBoard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);

export default DisplayedBoard