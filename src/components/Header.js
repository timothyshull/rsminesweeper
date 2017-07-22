import React, {Component} from 'react'
import './Header.css'

// https://codepen.io/brandonhimpfen/pen/JdBype
class Header extends Component {
    render() {
        return (
            <header className="custom-header mdl-layout__header mdl-layout__header--waterfall">
                <div className="mdl-layout__header-row">
                    {/*Title */}
                    <span className="mdl-layout-title">minesweeper</span>
                    {/*Add spacer, to align navigation to the right*/}
                    {/*<div className="mdl-layout-spacer"></div>*/}
                    {/*Navigation. We hide it in small screens.*/}
                    {/*<nav className="mdl-navigation mdl-layout--large-screen-only">*/}
                        {/*<a className="mdl-navigation__link" href="">Link</a>*/}
                        {/*<a className="mdl-navigation__link" href="">Link</a>*/}
                        {/*<a className="mdl-navigation__link" href="">Link</a>*/}
                        {/*<a className="mdl-navigation__link" href="">Link</a>*/}
                    {/*</nav>*/}
                </div>
            </header>
        );
    }
}

export default Header