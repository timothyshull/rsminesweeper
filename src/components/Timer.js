import React from 'react'
import {connect} from 'react-redux'
import './Timer.css'

const Timer = (props) => (<div className="Timer">{props.currentTime}</div>);

const mapStateToProps = state => ({
    running: state.timer.running,
    currentTime: state.timer.currentTime,
    intervalId: state.timer.intervalId
});

export default connect(
    mapStateToProps
)(Timer)
