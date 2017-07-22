import React, {Component} from 'react'


class ControlsMenu extends Component {
    render() {
        return (<table id="controls" className="dialog">
            <tbody>
            <tr className="dialog-title">
                <td>Controls</td>
                <td>
                    <span id="controls-close" className="dialog-close" title="close this box" onClick={this.props.onClose}>×</span>
                </td>
            </tr>
            <tr>
                <td><strong>Desktop</strong></td>
                <td>
                    <ul>
                        <li><b>Left-click</b> an empty square to reveal it.</li>
                        <li><b>Right-click</b> (or <b>Ctrl+click</b>) an empty square to flag it.</li>
                        <li><b>Midde-click</b> (or <b>left+right click</b>) a number to reveal<br/> its adjacent
                            squares.
                        </li>
                        <li>Press <b>space</b> bar while hovering over a square to flag<br/>it or reveal its adjacent
                            squares.
                        </li>
                        <li>Press <b>F2</b> to start a new game.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><strong>Mobile</strong></td>
                <td>
                    <ul>
                        <li><b>Tap</b> an empty square to reveal it.</li>
                        <li><b>Long-press</b> an empty square to flag it.</li>
                        <li><b>Tap</b> a number to reveal its adjacent squares.</li>
                    </ul>
                </td>
            </tr>
            </tbody>
        </table>);
    }
}

ControlsMenu.propTypes = {
    onClose: React.PropTypes.func.isRequired
};

export default ControlsMenu