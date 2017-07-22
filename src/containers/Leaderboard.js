import React from 'react'
import LeaderList from '../components/LeaderList'
import './Leaderboard'


const Leaderboard = ({leaders}) => (
    <div className="Leaderboard">
            <table>
                <tbody>
                <tr>
                    <th>Expert</th>
                    <th>Intermediate</th>
                    <th>Beginner</th>
                </tr>
                <LeaderList leaders={leaders}/>
                </tbody>
            </table>
    </div>
);

export default Leaderboard
