import React from 'react'
import {connect} from 'react-redux'
import './Timer.css'

/**
 * runs on first click of a game and stops on loss/win
 * resets to 0 on game restart
 * increments every second
 */
const Timer = (props) => (<div className="Timer">{props.currentTime}</div>);

const mapStateToProps = state => ({
    running: state.timer.running,
    currentTime: state.timer.currentTime,
    intervalId: state.timer.intervalId
});

export default connect(
    mapStateToProps
)(Timer)
