import React from 'react';
import Row from './row'
import { Connect4Context } from '../../store'
import './playGame.css'

export default ({ board, score1, score2, winner, currentPlayer, winingPattern, play }) => {

    const { player1Name, player2Name, game, starts } = React.useContext(Connect4Context)

    const winningPlayer = winner === '1' ? player1Name : winner ==='2'? player2Name : undefined

    console.log(winingPattern)
    let winningCols = []
    return (
        <div>
            <div className="board-screen">
            </div>
            <div className="score-panel">
                <label className="tournament-heading">{`${game} Games Tournament`}</label>
                {winningPlayer ? <label className="game-number">{`${winningPlayer}, you won the game`}</label> : null}
                <div className="player1-score">
                    <div className="outer">
                        {currentPlayer === 1 ?
                            <div className="current-player">
                                <div className="player1-image-div">
                                    <div className="player1-image"></div>
                                </div>
                            </div> :
                            <div className="player1-image-div">
                                <div className="player1-image"></div>
                            </div>
                        }
                    </div>
                    <label className="player-text">Player 1</label>
                    <label className="player-score-text">Score</label>
                    <label className="player-name">{player1Name}</label>
                    <label className="player-score-num">{score1}</label>
                </div>
                <div className="player2-score">
                    <div className="outer">
                        {currentPlayer === 2 ?
                            <div className="current-player">
                                <div className="player2-image-div">
                                    <div className="player2-image"></div>
                                </div>
                            </div> :
                            <div className="player2-image-div">
                                <div className="player2-image"></div>
                            </div>
                        }
                    </div>
                    <label className="player-text">Player 2</label>
                    <label className="player-score-text">Score</label>
                    <label className="player-name">{player2Name}</label>
                    <label className="player-score-num">{score2}</label>
                </div>
            </div>
            <div className="board">
                <table>
                    <thead>
                    </thead>
                    <tbody>
                        {board.map((row, i) => {
                            if (winingPattern && winingPattern.length > 0 && winingPattern[0][i]) {
                                winningCols = winingPattern[0][i]
                            }
                            return <Row key={i} row={row} play={play} winningCols={winningCols} />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}