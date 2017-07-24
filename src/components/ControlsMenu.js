import React, {Component} from 'react'
import PropTypes from 'prop-types'


class ControlsMenu extends Component {
    render() {
        return (
            <table className="dialog">
                <tbody>
                <tr>
                    <td>
                        <ul>
                            <li><b>click</b> an unrevealed cell to reveal it.</li>
                            <li><b>cmd-click</b> an unrevealed cell to flag it.</li>
                            <li><b>shift-click</b> an unrevealed cell to mark it with a question mark.</li>
                            <li><b>click</b> the "smiley" button at the top to start a new game.</li>
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}

ControlsMenu.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default ControlsMenu