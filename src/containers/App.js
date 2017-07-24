import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import FastClick from 'fastclick'
import * as MinesweeperActions from '../actions'
import {APP_PROPS} from '../constants/PropTypeDefs'
import Header from '../components/Header'
import Board from '../components/Board'
import './App.css'

class App extends Component {
    static componentDidMount() {
        FastClick.attach(document.body);
    }

    render() {
        const board = this.props.board;
        return (
            <div className="">
                <Header/>
                <main className="">
                    <div className="">
                        <div>
                            <Board board={board}/>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

App.propTypes = APP_PROPS;

const mapStateToProps = state => ({
    boardConfiguration: state.boardConfiguration,
    board: state.board
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(MinesweeperActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
