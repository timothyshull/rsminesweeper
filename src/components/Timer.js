import React, {Component} from 'react'
import {TIMER_PROPS} from '../constants/PropTypeDefs'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import './Timer.css'

// TODO: fix markup here
// https://stackoverflow.com/questions/34577012/creating-a-stopwatch-with-redux
const getElapsedTime = (baseTime, startedAt, stoppedAt = new Date().getTime()) => {
    if (!startedAt) {
        return 0;
    }
    return stoppedAt - startedAt + baseTime;
};

class Timer extends React.Component {
    // componentDidMount() {
    //     this.interval = setInterval(this.forceUpdate.bind(this), this.props.updateInterval || 33);
    // }
    //
    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }

    // render() {
    //     const {baseTime, startedAt, stoppedAt} = this.props;
    //     const elapsed = getElapsedTime(baseTime, startedAt, stoppedAt);
    //
    //     return (
    //         <div>
    //             <div>Time: {elapsed}</div>
    //             <div>
    //                 <button onClick={() => this.props.startTimer(elapsed)}>Start</button>
    //                 <button onClick={() => this.props.stopTimer()}>Stop</button>
    //                 <button onClick={() => this.props.resetTimer()}>Reset</button>
    //             </div>
    //         </div>
    //     );
    // }

    render () {
        return (<div className="Timer mdl-cell mdl-cell--4-col">100</div>);
    }
}

// function mapStateToProps(state) {
//     const {baseTime, startedAt, stoppedAt} = state;
//     return {baseTime, startedAt, stoppedAt};
// }

// Timer.propTypes = TIMER_PROPS;
//
//
// const mapStateToProps = state => ({
//     config: state.config,
//     board: state.board,
//     leaders: state.leaders
// });
//
// export default connect(
//     mapStateToProps
// )(Timer)

// Timer = ReactRedux.connect(mapStateToProps, {startTimer, stopTimer, resetTimer})(Timer);


// class Timer extends Component {
//     static propTypes = TIMER_PROPS;
//
//     render() {
//         return (
//             <div>
//                 <Timer updateInterval={33} />
//                 <Timer updateInterval={1000} />
//             </div>
//         );
//     }
// }




export default Timer