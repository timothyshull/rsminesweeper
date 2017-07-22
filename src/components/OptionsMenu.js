import React, {Component} from 'react'
import PropTypes from 'prop-types'


class OptionsMenu extends Component {
    render() {
        return (<table>
            <tbody>
            <tr>
                <td>Game</td>
                <td>
                    <span title="close" onClick={this.props.onClose}>×</span>
                </td>
            </tr>
            <tr className="dialog-bar">
                <td>Height</td>
                <td>Width</td>
                <td>Mines</td>
            </tr>
            <tr>
                <td><label><input type="radio" name="field" className="beginner"/> <strong>Beginner</strong></label></td>
                <td>9</td>
                <td>9</td>
                <td>10</td>
            </tr>
            <tr>
                <td><label><input type="radio" name="field" className="intermediate"/> <strong>Intermediate</strong></label>
                </td>
                <td>16</td>
                <td>16</td>
                <td>40</td>
            </tr>
            <tr>
                <td><label><input type="radio" name="field" checked="checked" className="expert"/>
                    <strong>Expert</strong></label>
                </td>
                <td>16</td>
                <td>30</td>
                <td>99</td>
            </tr>
            {/*<tr>*/}
                {/*<td><label><input type="radio" name="field" id="custom"/> Custom</label></td>*/}
                {/*<td><input type="text" value="20" className="dialog-text-input"/></td>*/}
                {/*<td><input type="text" value="30" className="dialog-text-input"/></td>*/}
                {/*<td><input type="text" value="145" id="custom_mines" className="dialog-text-input"/></td>*/}
            {/*</tr>*/}
            {/*<tr className="dialog-bar">*/}
                {/*<td><input type="submit" value="New Game" className="dialogText"/></td>*/}
                {/*<td>*/}
                    {/*<label><input type="checkbox" id="marks"/> Marks (?)</label>*/}
                {/*</td>*/}
            {/*</tr>*/}
            </tbody>
        </table>);
    }
}

// TODO: move to constants file
OptionsMenu.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default OptionsMenu