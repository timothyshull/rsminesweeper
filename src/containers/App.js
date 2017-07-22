import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import './App.css'
import * as MinesweeperActions from '../actions'
import ConfigurationMenu from '../containers/ConfigurationMenu'
import Board from '../components/Board'
import Leaderboard from './Leaderboard'
import FastClick from 'fastclick'
import {APP_PROPS} from '../constants/PropTypeDefs'

const noop = () => {
};

class App extends Component {
    static propTypes = APP_PROPS;

    static componentDidMount() {
        FastClick.attach(document.body);
    }

    render() {
        // const {config, board, leaders, actions} = this.props;
        const {leaders, board} = this.props;
        return (
            <div>
                <ConfigurationMenu/>
                <Board board={board} onCellClick={this.actions ? this.actions.revealAndCheck : noop}/>
                <Leaderboard leaders={leaders}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    config: state.config,
    board: state.board,
    leaders: state.leaders
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(MinesweeperActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
