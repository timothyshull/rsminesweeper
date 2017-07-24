import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import './App.css'
import * as MinesweeperActions from '../actions'
import Header from '../components/Header'
import ConfigurationMenu from '../components/ConfigurationMenu'
import Board from '../components/Board'
import FastClick from 'fastclick'
import {APP_PROPS} from '../constants/PropTypeDefs'

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
            <div className="">
                <Header/>
                <main className="">
                    <div className="">
                        <div>
                            <Board board={board} onCellClick={this.actions ? this.actions.revealAndCheck : noop}/>
                            {/*<ConfigurationMenu/>*/}
                        </div>
                    </div>
                </main>
            </div>
        );
    }
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
