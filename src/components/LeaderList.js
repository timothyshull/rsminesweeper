import React, {Component} from 'react'
import Leader from './Leader'
import {LEADERS_LIST_PROPS} from '../constants/PropTypeDefs'


class LeaderList extends Component {
    static propTypes = {
        leaders: LEADERS_LIST_PROPS
    };

    render() {
        const {leaders} = this.props;

        return (
            <tr>
                <td>
                    {leaders.map(leader => (
                        <Leader {...leader}/>
                    ))}
                </td>
            </tr>
        );
    }
}

export default LeaderList