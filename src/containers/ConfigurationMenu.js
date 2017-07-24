import React, {Component} from 'react'
import OptionsMenu from '../components/OptionsMenu'
import ControlsMenu from '../components/ControlsMenu'

class ConfigurationMenu extends Component {
    render() {
        return (
            <div className="ConfigurationMenu">
                <OptionsMenu onClose={this.closeModal}/>
                <ControlsMenu onClose={this.closeModal}/>
            </div>
        );
    }
}

export default ConfigurationMenu
