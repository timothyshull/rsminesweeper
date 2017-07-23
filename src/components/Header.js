import React, {Component} from 'react'
import './Header.css'

// https://codepen.io/brandonhimpfen/pen/JdBype
class Header extends Component {
    render() {
        return (
            <header className="Header mdl-layout__header mdl-layout__header--waterfall">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">minesweeper</span>
                </div>
            </header>
        );
    }
}

export default Header