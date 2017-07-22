import React from 'react'
import LeaderList from '../components/LeaderList'


const Leaderboard = ({leaders}) => (
    <div id="scores-panes">
        <div id="daily">
            {/*<div class="scores-pane" id="daily">*/}
            <table border="0">
                {/*<table border="0" cellspacing="0" cellpadding="0">*/}
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
    </div>
);
{/*<table>*/
}
{/*/!*<table {...props} className={props.className}>*!/*/
}
{/*<thead key="thead">*/
}
{/*/!*<tr>{columns}</tr>*!/*/
}
{/*<tr></tr>*/
}
{/*</thead>*/
}
{/*/!*<tbody key="tbody">{body}</tbody>*!/*/
}
{/*<tbody key="tbody"></tbody>*/
}
{/*</table>*/
}

// Leaderboard.propTypes = {
//     columns: React.PropTypes.array.isRequired,
//     data: React.PropTypes.array.isRequired
// };

export default Leaderboard
