import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {createNewBoard} from "../actions/index";
import {ON_CLICK_PROPS} from "../constants/PropTypeDefs";
import {svgConstants, svgColors} from "../constants/svgConstants"
import './ResetButton.css'

/**
 * the ResetButton has 3 long term states and 1 temporary state
 * long term:
 *   green and smiling during game play
 *   yellow and laughing for a win
 *   red and squiggly for a loss
 * temporary:
 *   yellow and laughing between mouse down and mouse up
 * resets to green on game restart
 */
class ResetButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: false,
            svgVars: {
                width: "35px",
                height: "32px",
                viewBox: "0 0 40 40",
            }
        };
        this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
        this.getSmileyMarkup = this.getSmileyMarkup.bind(this);
        this.getLaughMarkup = this.getLaughMarkup.bind(this);
        this.getBlurMarkup = this.getBlurMarkup.bind(this);
    }

    // machinery to animate the reset smiley button during click
    handleAnimationEnd() {
        this.setState({animating: false})
    }

    componentDidMount() {
        this.refs.button.addEventListener('animationend', this.handleAnimationEnd)
    }

    componentWillUnmount() {
        this.refs.button.removeEventListener('animationend', this.handleAnimationEnd)
    }

    getSmileyMarkup() {
        const svgVars = this.state.svgVars;
        return (
            <svg width={svgVars.width} height={svgVars.height} viewBox={svgVars.viewBox}>
                <g stroke={svgConstants.none} strokeWidth={svgConstants.strokeWidth} fill={svgConstants.none}
                   fillRule={svgConstants.frEvenOdd}>
                    <g fillRule={svgConstants.frNonZero} fill={svgColors.green}>
                        <path d="M20,40 C31.0461538,40 40,31.0461538 40,20 C40,8.95384615 31.0461538,0 20,0
                                        C8.95384615,0 0,8.95384615 0,20 C0,31.0461538 8.95384615,40 20,40 Z
                                        M3.61692308,15.8353846 C6.80307692,17.7630769 12.9353846,18.4615385
                                        20,18.4615385 C22.6353846,18.4615385 25.1338462,18.36 27.4061538,18.14
                                        C25.9384615,16.8015385 23.9784615,14.6292308 23.0769231,11.92 C21.8,8.08923077
                                        27.9446154,14.8553846 32.7092308,17.2661538 C34.1676923,16.8938462
                                        35.4153846,16.4230769 36.3846154,15.8353846 C36.7230769,17.1707692
                                        36.9230769,18.56 36.9230769,20 C36.9230769,29.3307692 29.3307692,36.9230769
                                        20,36.9230769 C10.6692308,36.9230769 3.07692308,29.3307692 3.07692308,20
                                        C3.07692308,18.56 3.27692308,17.1707692 3.61692308,15.8353846 Z"/>
                        <path d="M13.8461538,26.1538462 C15.5446154,26.1538462 16.9230769,24.7753846
                                        16.9230769,23.0769231 C16.9230769,21.3784615 15.5446154,20 13.8461538,20
                                        C12.1476923,20 10.7692308,21.3784615 10.7692308,23.0769231
                                        C10.7692308,24.7753846 12.1476923,26.1538462 13.8461538,26.1538462 Z
                                        M14.6153846,21.5384615 C15.04,21.5384615 15.3846154,21.8830769
                                        15.3846154,22.3076923 C15.3846154,22.7323077 15.04,23.0769231
                                        14.6153846,23.0769231 C14.1907692,23.0769231 13.8461538,22.7323077
                                        13.8461538,22.3076923 C13.8461538,21.8830769 14.1907692,21.5384615
                                        14.6153846,21.5384615 Z"/>
                        <path d="M26.1538462,26.1538462 C27.8523077,26.1538462 29.2307692,24.7753846
                                        29.2307692,23.0769231 C29.2307692,21.3784615 27.8523077,20 26.1538462,20
                                        C24.4553846,20 23.0769231,21.3784615 23.0769231,23.0769231
                                        C23.0769231,24.7753846 24.4553846,26.1538462 26.1538462,26.1538462 Z
                                        M25.3846154,21.5384615 C25.8092308,21.5384615 26.1538462,21.8830769
                                        26.1538462,22.3076923 C26.1538462,22.7323077 25.8092308,23.0769231
                                        25.3846154,23.0769231 C24.96,23.0769231 24.6153846,22.7323077
                                        24.6153846,22.3076923 C24.6153846,21.8830769 24.96,21.5384615
                                        25.3846154,21.5384615 Z"/>
                        <path d="M14.5307692,28.8815385 L13.1569231,29.5738462 C13.2292308,29.7169231
                                        14.9661538,33.0753846 19.9984615,33.0753846 C25.0307692,33.0753846
                                        26.7676923,29.7153846 26.84,29.5738462 L25.4661538,28.8815385
                                        C25.4092308,28.9892308 24.0415385,31.5384615 19.9969231,31.5384615
                                        C15.9553846,31.5384615 14.5876923,28.9907692 14.5307692,28.8815385 Z"/>
                    </g>
                </g>
            </svg>
        );
    }

    getBlurMarkup() {
        const svgVars = this.state.svgVars;
        return (
            <svg width={svgVars.width} height={svgVars.height} viewBox={svgVars.viewBox}>
                <g stroke={svgConstants.none} strokeWidth={svgConstants.strokeWidth} fill={svgConstants.none}
                   fillRule={svgConstants.frEvenOdd}>
                    <g fillRule={svgConstants.frNonZero} fill={svgColors.red}>
                        <path d="M20,0 C8.95384615,0 0,8.95384615 0,20 C0,31.0461538 8.95384615,40 20,40 C31.0461538,40
                                40,31.0461538 40,20 C40,8.95384615 31.0461538,0 20,0 Z M20,36.9230769
                                C10.6692308,36.9230769 3.07692308,29.3307692 3.07692308,20 C3.07692308,18.56
                                3.27692308,17.1707692 3.61692308,15.8353846 C6.80307692,17.7630769 12.9338462,18.4615385
                                20,18.4615385 C22.6353846,18.4615385 25.1338462,18.36 27.4061538,18.14
                                C25.9384615,16.8015385 23.9784615,14.6292308 23.0769231,11.92 C21.8,8.08923077
                                27.9446154,14.8553846 32.7092308,17.2661538 C34.1676923,16.8938462 35.4153846,16.4230769
                                36.3846154,15.8353846 C36.7230769,17.1707692 36.9230769,18.56 36.9230769,20
                                C36.9230769,29.3307692 29.3307692,36.9230769 20,36.9230769 Z"/>
                        <path d="M21.7646154,30.7092308 C21.1015385,31.1353846 20.4753846,31.5384615 20,31.5384615
                                C19.5246154,31.5384615 18.8969231,31.1353846 18.2353846,30.7092308
                                C16.6215385,29.6692308 14.1846154,28.1015385 11.6676923,31.8815385
                                L12.9476923,32.7353846 C14.6292308,30.2153846 15.7323077,30.9261538
                                17.4030769,32.0015385 C18.2230769,32.5307692 19.0723077,33.0769231 20.0015385,33.0769231
                                C20.9307692,33.0769231 21.7784615,32.5307692 22.5984615,32.0015385
                                C24.2707692,30.9261538 25.3738462,30.2169231 27.0538462,32.7353846
                                L28.3338462,31.8815385 C25.8138462,28.1030769 23.3753846,29.6692308
                                21.7646154,30.7092308 Z"/>
                        <polygon points="12.3076923 27.6923077 13.8461538 27.6923077 13.8461538 24.6153846 16.9230769
                                24.6153846 16.9230769 23.0769231 13.8461538 23.0769231 13.8461538 20 12.3076923 20
                                12.3076923 23.0769231 9.23076923 23.0769231 9.23076923 24.6153846 12.3076923 24.6153846"/>
                        <polygon points="27.6923077 20 26.1538462 20 26.1538462 23.0769231 23.0769231 23.0769231
                                23.0769231 24.6153846 26.1538462 24.6153846 26.1538462 27.6923077 27.6923077 27.6923077
                                27.6923077 24.6153846 30.7692308 24.6153846 30.7692308 23.0769231 27.6923077 23.0769231"/>
                    </g>
                </g>
            </svg>
        );
    }

    getLaughMarkup() {
        const svgVars = this.state.svgVars;
        return (
            <svg width={svgVars.width} height={svgVars.height} viewBox={svgVars.viewBox}>
                <g stroke={svgConstants.none} strokeWidth={svgConstants.strokeWidth} fill={svgConstants.none}
                   fillRule={svgConstants.frEvenOdd}>
                    <g fillRule={svgConstants.frNonZero} fill={svgColors.yellow}>
                        <path d="M17.1092308,22.3323077 L10.9553846,20.7938462 C10.5446154,20.6892308 10.1261538,20.9415385
                                10.0246154,21.3523077 C9.92,21.7646154 10.1723077,22.1815385 10.5830769,22.2830769
                                L14.7184615,23.3184615 L10.4246154,25.4646154 C10.0446154,25.6538462 9.89076923,26.1169231
                                10.08,26.4969231 C10.2153846,26.7661538 10.4861538,26.9215385 10.7676923,26.9215385
                                C10.8846154,26.9215385 11.0015385,26.8938462 11.1123077,26.84 L17.2661538,23.7630769
                                C17.5538462,23.6184615 17.7215385,23.3107692 17.6861538,22.9907692 C17.6538462,22.6723077
                                17.4215385,22.4092308 17.1092308,22.3323077 Z"/>
                        <path d="M29.5753846,25.4661538 L25.2815385,23.32 L29.4184615,22.2846154 C29.8307692,22.1830769
                                30.0830769,21.7646154 29.9769231,21.3538462 C29.8753846,20.9415385 29.4538462,20.6892308
                                29.0461538,20.7953846 L22.8923077,22.3338462 C22.58,22.4123077 22.3476923,22.6753846
                                22.3138462,22.9953846 C22.28,23.3153846 22.4476923,23.6230769 22.7338462,23.7676923
                                L28.8876923,26.8446154 C28.9969231,26.8984615 29.1138462,26.9261538 29.2323077,26.9261538
                                C29.5153846,26.9261538 29.7846154,26.7692308 29.92,26.5015385 C30.1076923,26.1184615
                                29.9553846,25.6553846 29.5753846,25.4661538 Z"/>
                        <path d="M20,0 C8.95384615,0 0,8.95384615 0,20 C0,31.0461538 8.95384615,40 20,40 C31.0461538,40
                                40,31.0461538 40,20 C40,8.95384615 31.0461538,0 20,0 Z M26.0723077,35.7784615
                                C28.5815385,33.0507692 29.2307692,29.2307692 29.2307692,29.2307692 L10.7692308,29.2307692
                                C10.7692308,29.2307692 11.4184615,33.0507692 13.9276923,35.7784615 C7.59076923,33.3292308
                                3.07692308,27.1892308 3.07692308,20 C3.07692308,18.56 3.27692308,17.1707692
                                3.61692308,15.8353846 C6.80307692,17.7630769 12.9338462,18.4615385 20,18.4615385
                                C22.6353846,18.4615385 25.1338462,18.36 27.4061538,18.14 C25.9384615,16.8015385
                                23.9784615,14.6292308 23.0769231,11.92 C21.8,8.08923077 27.9446154,14.8553846
                                32.7092308,17.2661538 C34.1676923,16.8938462 35.4153846,16.4230769 36.3846154,15.8353846
                                C36.7230769,17.1707692 36.9230769,18.56 36.9230769,20 C36.9230769,27.1892308
                                32.4092308,33.3292308 26.0723077,35.7784615 Z"/>
                    </g>
                </g>
            </svg>
        )
    }

    render() {
        const mouseDownHandler = () => this.setState({animating: true});
        const mouseUpHandler = () => {
            this.props.onClick(this.props);
            this.setState({animating: false});
        };

        let markupFunc = this.getSmileyMarkup;
        if (this.props.gameWon) {
            markupFunc = this.getLaughMarkup;
        } else if (this.props.gameComplete) {
            markupFunc = this.getBlurMarkup;
        }
        markupFunc.bind(this);

        return (
            <div className="ResetButton">
                <button ref='button' onMouseDown={mouseDownHandler.bind(this)} onMouseUp={mouseUpHandler.bind(this)}>
                    {this.state.animating ? this.getLaughMarkup() : markupFunc()}
                </button>
            </div>
        );
    }
}

ResetButton.propTypes = ON_CLICK_PROPS;

const mapStateToProps = state => {
    return {
        gameComplete: state.gameStatus.gameComplete,
        gameWon: state.gameStatus.gameWon
    }
};

const mapDispatchToProps = dispatch => ({
    onClick: bindActionCreators(createNewBoard, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton)
