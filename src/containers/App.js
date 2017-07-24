import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import FastClick from 'fastclick'
import * as MinesweeperActions from '../actions'
import {APP_PROPS} from '../constants/PropTypeDefs'
import Header from '../components/Header'
import BoardContainer from '../containers/BoardContainer'


class App extends Component {
    componentDidMount() {
        FastClick.attach(document.body);
    }

    render() {
        return (
            <div>
                <Header/>
                <main>
                    <BoardContainer/>
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
