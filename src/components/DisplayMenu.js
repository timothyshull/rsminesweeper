import React, {Component} from 'react'


class DisplayMenu extends Component {
    render() {
        return (<table className="dialog">
            <tbody>
            <tr className="dialog-title">
                <td>Display</td>
                <td>
                    <span className="dialog-close" title="close this box" onClick={this.props.onClose}>×</span>
                </td>
            </tr>
            <tr>
                <td><strong>Zoom</strong></td>
                <td>
                    <label><input type="radio" name="zoom" value="1" checked="checked"/> 100%</label><br/>
                    <label><input type="radio" name="zoom" value="1.5"/> 150%</label><br/>
                    <label><input type="radio" name="zoom" value="2"/> 200%</label>
                </td>
            </tr>
            <tr>
                <td><strong>Position</strong></td>
                <td>
                    <label><input type="radio" name="position" value="center" checked="checked"/>
                        Center</label><br/>
                    <label><input type="radio" name="position" value="left" checked="checked"/> Left</label>
                </td>
            </tr>
            <tr>
                <td><strong>Night Mode</strong></td>
                <td>
                    <input type="checkbox" name="nightMode"/>
                </td>
            </tr>
            </tbody>
        </table>);
    }
}

DisplayMenu.propTypes = {
    onClose: React.PropTypes.func.isRequired
};

export default DisplayMenu