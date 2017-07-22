import React, {Component} from 'react'
import {LEADER_PROPS} from '../constants/PropTypeDefs'


class Leader extends Component {
    static propTypes = LEADER_PROPS;

    render() {
        const {rank, name, time} = this.props;
        // scores-rank = scores-number
        return (
            <span title="JKMercury - 22 hours ago">
                <div className="scores-rank">{rank}</div>
                <div className="scores-name">{name}</div>
                <div className="scores-time">{time}</div>
            </span>
        )
    };
}

export default Leader