const initialLeaderState = [
    {"rank": 1, "name": "Leader 1", "time": 60},
    {"rank": 2, "name": "Leader 2", "time": 70},
    {"rank": 3, "name": "Leader 3", "time": 80},
    {"rank": 4, "name": "Leader 4", "time": 90}
];


const leaders = (state = initialLeaderState, action) => {
    switch (action.type) {
        case 'REVEAL_CELL':
            return state.map(cell =>
                (cell.xPos === action.xPos && cell.yPos === action.yPos)
                    ? {...cell, revealed: true}
                    : cell
            );
        default:
            return state
    }
};

export default leaders