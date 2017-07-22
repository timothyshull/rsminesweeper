import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {CELL_PROPS} from '../constants/PropTypeDefs'
import {revealCell} from '../actions'
import classNames from 'classnames'
import './Cell.css'

class Cell extends Component {
    static propTypes = CELL_PROPS;

    constructor(props) {
        super(props);
        // this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.onClick(this.props);
    }

    render() {
        // TODO: need to have different cell appearances for empty and not revealed
        const cellState = this.props.revealed ? this.props.cellState : 'empty';
        return (
            <td onClick={this.handleClick} className={classNames('Cell', cellState)}>&nbsp;</td>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onClick: bindActionCreators(revealCell, dispatch)
});

export default connect(null, mapDispatchToProps)(Cell)

// export default Cell