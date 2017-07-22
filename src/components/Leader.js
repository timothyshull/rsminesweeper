import React, {Component} from 'react'
import {LEADER_PROPS} from '../constants/PropTypeDefs'


class Leader extends Component {
    static propTypes = LEADER_PROPS;

    render() {
        const {rank, name, time} = this.props;
        const title = name + " - ";  // TODO: append - time of completion
        // scores-rank = scores-number
        return (
            <span title={title}>
                <div className="leaderRank">{rank}</div>
                <div className="leaderName">{name}</div>
                <div className="leaderTime">{time}</div>
            </span>
        )
    };
}

export default Leader