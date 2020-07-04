import React from 'react';
import {useHistory} from 'react-router'
import './selectGame.css'

export default ({setPlayType}) => {
    const history = useHistory()
    
    const onTwoPlayerClick = (e) => {
        e.preventDefault()
        setPlayType('Two Players Game')
        history.push('./details')
    }

    const onButtonClick = (e) => {
        e.preventDefault()
        alert('Coming Soon')
    }
    return (
        <div>
            <div className="outer-div">
            </div>
            <span className="connect-four"> CONNECT FOUR!</span>
            <span className="description"> Play with other players around the world.</span>
            <div className="main">
                <div className="play">
                    <span className="play-text">PLAY</span>
                </div>
                <button className="custom-game-button" onClick={onButtonClick}>
                    <div className="custom-game-image"></div>
                    <div className="button-text">Custom Game</div>
                </button>
                <button className="two-button" onClick={onTwoPlayerClick}>
                    <div className="two-image"></div>
                    <div className="button-text">Two Players</div>
                </button>
                <button className="online-button" onClick={onButtonClick}>
                    <div className="online-image"></div>
                    <div className="button-text">Game Online</div>
                </button>
                <button className="training-button" onClick={onButtonClick}>
                    <div className="training-image"></div>
                    <div className="button-text">Training Game</div>
                </button>
            </div>
            <div className="logo">
            </div>
        </div>
    )
}