import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setDifficulty} from '../actions'
import {ON_CLICK_PROPS} from '../constants/PropTypeDefs'
import './ConfigurationMenu.css'

class ConfigurationMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {difficulty: 'expert'};
        this.handleDifficultySelection = this.handleDifficultySelection.bind(this)
    }

    handleDifficultySelection(e) {
        this.setState({difficulty: e.target.value});
        this.props.onClick(e.target.value);
    }

    getOptionsMarkup() {
        return (
            <div className="OptionsMenu">
                <form>
                    <div className="radio">
                        <label>
                            <input type="radio" value="beginner"
                                   checked={this.state.difficulty === 'beginner'}
                                   onChange={this.handleDifficultySelection}/>
                            Beginner (9x9, 10 bombs)
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="intermediate"
                                   checked={this.state.difficulty === 'intermediate'}
                                   onChange={this.handleDifficultySelection}/>
                            Intermediate (16x16, 40 bombs)
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="expert"
                                   checked={this.state.difficulty === 'expert'}
                                   onChange={this.handleDifficultySelection}/>
                            Expert (30x16, 99 bombs)
                        </label>
                    </div>
                </form>
            </div>
        );
    }

    static getInstructionsMarkup() {
        return (
            <div className="InstructionsMenu">
                <ul>
                    <li><b>click</b> an unrevealed cell to reveal it.</li>
                    <li><b>cmd-click</b> an unrevealed cell to flag it.</li>
                    <li><b>alt-click</b> an unrevealed cell to mark it with a question mark.</li>
                    <li><b>click</b> the "smiley" button at the top to start a new game.</li>
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div className="ConfigurationMenu">
                {this.getOptionsMarkup()}
                {ConfigurationMenu.getInstructionsMarkup()}
            </div>
        );
    }
}

ConfigurationMenu.propTypes = ON_CLICK_PROPS;

const mapDispatchToProps = dispatch => ({
    onClick: bindActionCreators(setDifficulty, dispatch)
});

export default connect(null, mapDispatchToProps)(ConfigurationMenu)
