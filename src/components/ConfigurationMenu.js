import React, {Component} from 'react'
import OptionsMenu from '../components/OptionsMenu'
import ControlsMenu from '../components/ControlsMenu'

class ConfigurationMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {difficulty: 'expert'};
        this.handleDifficultySelection = this.handleDifficultySelection.bind(this)
    }

    handleDifficultySelection(e) {
        this.setState({difficulty: e.target.value});
    }

    getOptionsMarkup() {
        return (
            <div>
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
            <div>
                <ul>
                    <li><b>click</b> an unrevealed cell to reveal it.</li>
                    <li><b>cmd-click</b> an unrevealed cell to flag it.</li>
                    <li><b>shift-click</b> an unrevealed cell to mark it with a question mark.</li>
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

export default ConfigurationMenu