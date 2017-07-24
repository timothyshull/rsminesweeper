import React, {Component} from 'react'
import PropTypes from 'prop-types'


class OptionsMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {difficulty: 'expert'};
        this.handleDifficultySelection = this.handleDifficultySelection.bind(this)
    }

    handleDifficultySelection(e) {
        this.setState({difficulty: e.target.value});
    }

    render() {
        return (
            <form>
                <div><span title="close" onClick={this.props.onClose}>×</span></div>
                <div className="radio">
                    <label>
                        <input type="radio" value="beginner"
                               checked={this.state.difficulty === 'beginner'}
                               onChange={this.handleDifficultySelection} />
                        Beginner (9x9, 10 bombs)
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="intermediate"
                               checked={this.state.difficulty === 'intermediate'}
                               onChange={this.handleDifficultySelection} />
                        Intermediate (16x16, 40 bombs)
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="expert"
                               checked={this.state.difficulty === 'expert'}
                               onChange={this.handleDifficultySelection} />
                        Expert (30x16, 99 bombs)
                    </label>
                </div>
            </form>
        );
    }


    // render() {
    //     return (
    //         <table>
    //             <tbody>
    //             <tr>
    //                 <td>Game</td>
    //                 <td>
    //                     <span title="close" onClick={this.props.onClose}>×</span>
    //                 </td>
    //             </tr>
    //             <tr className="dialog-bar">
    //                 <td>Height</td>
    //                 <td>Width</td>
    //                 <td>Mines</td>
    //             </tr>
    //             <tr>
    //                 <td><label><input type="radio" name="field" className="beginner"/> <strong>Beginner</strong></label>
    //                 </td>
    //                 <td>9</td>
    //                 <td>9</td>
    //                 <td>10</td>
    //             </tr>
    //             <tr>
    //                 <td><label><input type="radio" name="field" className="intermediate"/> <strong>Intermediate</strong></label>
    //                 </td>
    //                 <td>16</td>
    //                 <td>16</td>
    //                 <td>40</td>
    //             </tr>
    //             <tr>
    //                 <td><label><input type="radio" name="field" checked="checked" className="expert"/>
    //                     <strong>Expert</strong></label>
    //                 </td>
    //                 <td>16</td>
    //                 <td>30</td>
    //                 <td>99</td>
    //             </tr>
    //             </tbody>
    //         </table>
    //     );
    // }
}

// TODO: move to constants file
OptionsMenu.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default OptionsMenu