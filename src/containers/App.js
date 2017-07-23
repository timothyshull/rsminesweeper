import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import './App.css'
import * as MinesweeperActions from '../actions'
import Header from '../components/Header'
import ConfigurationMenu from '../containers/ConfigurationMenu'
import Board from '../components/Board'
import FastClick from 'fastclick'
import {APP_PROPS} from '../constants/PropTypeDefs'
import componentHandler from 'material-design-lite'

const noop = () => {
};

class App extends Component {
    static componentDidMount() {
        FastClick.attach(document.body);
    }

    // NOTE: removed support of leaderboard for now
    render() {
        // const {config, board, leaders, actions} = this.props;
        const board = this.props.board;
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header/>
                <main className="mdl-layout__content">
                    <div className="page-content">
                        <div>
                            <Board board={board} onCellClick={this.actions ? this.actions.revealAndCheck : noop}/>
                            <ConfigurationMenu/>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
    // componentDidMount() {
    //     window.componentHandler.upgradeElement(this.root);      // <==
    // }
    //
    // componentWillUnmount() {
    //     window.componentHandler.downgradeElements(this.root);   // <==
    // }
}

App.propTypes = APP_PROPS;

const mapStateToProps = state => ({
    config: state.config,
    board: state.board
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(MinesweeperActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
