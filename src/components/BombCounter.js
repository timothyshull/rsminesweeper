import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BOMB_COUNTER_PROPS} from "../constants/PropTypeDefs";
import './BombCounter.css'

class BombCounter extends Component {
    render () {
        return (<div className="BombCounter">{this.props.bombsRemaining}</div>);
    }
}

BombCounter.PropTypes = BOMB_COUNTER_PROPS;

const mapStateToProps = state => ({bombsRemaining: state.bombCounter.bombsRemaining});

export default connect(
    mapStateToProps
)(BombCounter)
