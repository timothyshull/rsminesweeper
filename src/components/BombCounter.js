import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BOMB_COUNTER_PROPS} from "../constants/PropTypeDefs";
import './BombCounter.css'

class BombCounter extends Component {
    render () {
        return (<div className="BombCounter">{this.props.numBombs}</div>);
    }
}

BombCounter.PropTypes = BOMB_COUNTER_PROPS;

const mapStateToProps = state => ({
    numBombs: state.bombCounter.numBombs
});

export default connect(
    mapStateToProps
)(BombCounter)
