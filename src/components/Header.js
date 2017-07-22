class Header extends Component {
    render() {
        return (
            <header class$="header" class="style-scope material-io-nav">
                <div class="nav-background style-scope material-io-nav"></div>
                <div class="brand-wrapper style-scope material-io-nav">
                    <div class="brand-carousel style-scope material-io-nav">
                        <a class="material-link style-scope material-io-nav" aria-labelledby="page-heading" href="/">
                            <h2 id="page-heading" class="_text style-scope material-io-nav">Minesweeper</h2>
                        </a>
                        <div class="property-brand style-scope material-io-nav" aria-labelledby="brand-name">
                            <div class="icon style-scope material-io-nav"></div>
                            <div class="brand-name style-scope material-io-nav" id="brand-name">Icons</div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}