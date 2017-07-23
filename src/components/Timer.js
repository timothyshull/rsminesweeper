import React, {Component} from 'react'
import {TIMER_PROPS} from '../constants/PropTypeDefs'
import {connect} from 'react-redux'
import './Timer.css'

// https://stackoverflow.com/questions/34577012/creating-a-stopwatch-with-redux

class Timer extends Component {
    // TODO: fix this conditional
    render() {
        return (<div className="Timer">{typeof this.props.currentTime === 'undefined' ? 0 : this.props.currentTime}</div>);
    }
}

Timer.propTypes = TIMER_PROPS;

const mapStateToProps = state => ({
    running: state.timer.running,
    currentTime: state.timer.currentTime,
    intervalId: state.timer.intervalId
});

export default connect(
    mapStateToProps
)(Timer)
