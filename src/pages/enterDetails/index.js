import React, { useState } from 'react';
import { Connect4Context } from '../../store'
import {useHistory} from 'react-router'
import Modal from './Modal'
import './enterDetails.css'

export default ({ playType }) => {
    const history = useHistory()    
    const [value, setValue1] = useState('')
    const { player1Name, player2Name, game, starts, showGameModal, showStartModal, setValue } = React.useContext(Connect4Context)

    const gameModal = [{
        displayText: '2 Games',
        value: 2
    },
    {
        displayText: '3 Games',
        value: 3
    },
    {
        displayText: '5 Games',
        value: 5
    },
    {
        displayText: '10 Games',
        value: 10
    }]

    const startModal = [{
        displayText: 'Alternative Turn',
        value: 'Alternative Turn'
    },
    {
        displayText: 'Looser First',
        value: 'Looser First'
    },
    {
        displayText: 'Winner First',
        value: 'Winner First'
    },
    {
        displayText: 'Always Player 1',
        value: 'Always Player 1'
    },
    {
        displayText: 'Always Player 2',
        value: 'Always Player 2'
    }]

    const onPlayer1Change = (e) => {
        e.preventDefault()
        setValue('Player1', e.target.value)
    }

    const onPlayer2Change = (e) => {
        e.preventDefault()
        setValue('Player2', e.target.value)
    }

    const onGameClick = (e) => {
        setValue('Game Modal', true)
    }

    const onStartClick = (e) => {
        setValue('Start Modal', true)
    }

    const handleOnChangeGame = (e) => {
        e.preventDefault()
        setValue('Game', value)
        setValue('Game Modal', false)
    }

    const handleGameCancel = (e) => {
        e.preventDefault()
        setValue('Game', '')
        setValue('Game Modal', false)
    }

    const handleOnChangeStart = (e) => {
        e.preventDefault()
        setValue('Starts', value)
        setValue('Start Modal', false)
    }

    const handleStartCancel = (e) => {
        e.preventDefault()
        setValue('Starts', '')
        setValue('Start Modal', false)
    }

    const onStartButton = (e) => {
        history.push('./game')
    }

    return (
        <div className="outer-box">
            {showGameModal && <Modal gameModal={gameModal} value={value} setValue1={setValue1} title="Number of game" handleOnChange={handleOnChangeGame} handleCancel={handleGameCancel} />}
            {showStartModal && <Modal gameModal={startModal} value={value} setValue1={setValue1} title="Who Starts" handleOnChange={handleOnChangeStart} handleCancel={handleStartCancel} />}
            <div className="player1-box">
                <div className="player1-screen">
                    <div className="player1-image"></div>
                </div>
                <span className="player1-field">Player 01</span>
                <div className="player1-input">
                    <input type="text" name="player1" value={player1Name} onChange={onPlayer1Change} />
                </div>
            </div>
            <div className="player2-box">
                <div className="player2-screen">
                    <div className="player2-image"></div>
                </div>
                <span className="player1-field">Player 02</span>
                <div className="player2-input">
                    <input type="text" name="player2" value={player2Name} onChange={onPlayer2Change} />
                </div>
            </div>
            <div className="game-number-box">
                <div className="game-screen">
                    <div className="game-image"></div>
                </div>
                <span className="player1-field">Number of Game</span>
                <div className="player2-input">
                    <button onClick={onGameClick}>
                        <label className="game-value">{game !== '' ? `${game} Games` : ''}</label>
                    </button>
                </div>
            </div>
            <div className="starts-box">
                <div className="game-screen">
                    <div className="start-image"></div>
                </div>
                <span className="player1-field">Who Starts</span>
                <div className="player2-input">
                    <button onClick={onStartClick}>
                        <label className="game-value">{starts}</label>
                    </button>
                </div>
            </div>
            <div className="line"></div>
            <button className="start-button" onClick={onStartButton}>
                <label style={{ marginLeft: "30%" }}>START GAME</label>
            </button>
        </div>
    )
}