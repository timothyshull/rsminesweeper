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
                <button name="gameOptions" onClick={this.handleOptionsClick}>Game Options</button>
                {/*<button name="displayOptions" onClick={this.handleDisplayClick}>Display Options</button>*/}
                <button name="controls" onClick={this.handleControlsClick}>Controls</button>
                <div>{modal}</div>
            </div>
        );
    }
}

export default ConfigurationMenu





// class Modal extends React.Component {
//     render() {
//         // Render nothing if the "show" prop is false
//         if(!this.props.show) {
//             return null;
//         }
//
//         // The gray background
//         const backdropStyle = {
//             position: 'fixed',
//             top: 0,
//             bottom: 0,
//             left: 0,
//             right: 0,
//             backgroundColor: 'rgba(0,0,0,0.3)',
//             padding: 50
//         };
//
//         // The modal "window"
//         const modalStyle = {
//             backgroundColor: '#fff',
//             borderRadius: 5,
//             maxWidth: 500,
//             minHeight: 300,
//             margin: '0 auto',
//             padding: 30
//         };
//
//         return (
//             <div className="backdrop" style={backdropStyle}>
//                 <div className="modal" style={modalStyle}>
//                     {this.props.children}
//
//                     <div className="footer">
//                         <button onClick={this.props.onClose}>
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
// Modal.propTypes = {
//     onClose: React.PropTypes.func.isRequired,
//     show: React.PropTypes.bool,
//     children: React.PropTypes.node
// };





// class App extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = { isOpen: false };
//     }
//
//     toggleModal = () => {
//         this.setState({
//             isOpen: !this.state.isOpen
//         });
//     }
//
//     render() {
//         return (
//             <div className="App">
//                 <button onClick={this.toggleModal}>
//                     Open the modal
//                 </button>
//
//                 <Modal show={this.state.isOpen}
//                        onClose={this.toggleModal}>
//                     Here's some content for the modal
//                 </Modal>
//             </div>
//         );
//     }
// }