import React from 'react'
import {connect} from 'react-redux'
import './BombCounter.css'

/**
 * increments when a flag is added
 * decrements when a flag is removed
 * kept it simple and allow the user to decrement past the number of bombs on the board (into the negative)
 */
const BombCounter = (props) => (<div className="BombCounter">{props.bombsRemaining}</div>);

const mapStateToProps = state => ({bombsRemaining: state.bombCounter.bombsRemaining});

export default connect(
    mapStateToProps
)(BombCounter)
