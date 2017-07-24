import React from 'react'
import {connect} from 'react-redux'
import './BombCounter.css'

const BombCounter = (props) => (<div className="BombCounter">{props.bombsRemaining}</div>);

const mapStateToProps = state => ({bombsRemaining: state.bombCounter.bombsRemaining});

export default connect(
    mapStateToProps
)(BombCounter)
