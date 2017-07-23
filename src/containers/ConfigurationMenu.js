import React, {Component} from 'react'
import OptionsMenu from '../components/OptionsMenu'
import DisplayMenu from '../components/DisplayMenu'
import ControlsMenu from '../components/ControlsMenu'

const noModal = 0;
const optionsModal = 1;
const displayModal = 2;
const controlsModal = 3;

class ConfigurationMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {showModal: noModal};
        this.handleOptionsClick = this.handleOptionsClick.bind(this);
        this.handleDisplayClick = this.handleDisplayClick.bind(this);
        this.handleControlsClick = this.handleControlsClick.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleOptionsClick() {
        this.setState({showModal: optionsModal});
    }

    handleDisplayClick() {
        this.setState({showModal: displayModal});
    }

    handleControlsClick() {
        this.setState({showModal: controlsModal});
    }

    closeModal() {
        this.setState({showModal: noModal});
    }

    // TODO: make this better
    render() {
        let modal = '';
        switch (this.state.showModal) {
            case optionsModal:
                modal = <form><OptionsMenu onClose={this.closeModal}/></form>;
                break;
            case displayModal:
                modal = <form><DisplayMenu onClose={this.closeModal}/></form>;
                break;
            case controlsModal:
                modal = <form><ControlsMenu onClose={this.closeModal}/></form>;
                break;
            default:
                break;
        }

        return (
            <div className="ConfigurationMenu">
                <button name="gameOptions" className="" onClick={this.handleOptionsClick}>Game Options</button>
                {/*<button name="displayOptions" onClick={this.handleDisplayClick}>Display Options</button>*/}
                <button name="controls" onClick={this.handleControlsClick}>Controls</button>
                <div>{modal}</div>
            </div>
        );
    }
}

export default ConfigurationMenu


