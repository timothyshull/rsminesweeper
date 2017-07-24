import React from 'react';
import Board from '../components/Board';
import BombCounter from '../components/BombCounter'
import ConfigurationMenu from '../components/ConfigurationMenu'
import Timer from '../components/Timer'
import ResetButton from '../components/ResetButton'
import './BoardContainer.css'


const BoardContainer = () => (
    <div className="BoardContainer">
        <div className="BoardHeader">
            <BombCounter/>
            <ResetButton/>
            <Timer/>
        </div>
        <Board/>
        <ConfigurationMenu/>
    </div>
);

export default BoardContainer
