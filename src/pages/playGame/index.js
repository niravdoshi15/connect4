import React, { useState, useEffect } from 'react';
import { Connect4Context } from '../../store'
import Board from './board'

export default () => {

    const { player1Name, player2Name, game, starts } = React.useContext(Connect4Context)


    // let gameLength = []
    // for (let i = 1; i <= game; i++) {
    //     gameLength.push(i)
    // }

    const player1 = 1
    const player2 = 2
    const c4rows = 8
    const c4columns = 8

    const [board, setBoard] = useState([])
    const [currentPlayer, setCurrentPlayer] = useState(null)
    const [gameOver, setGameOver] = useState(false)
    const [winingPattern, setWiningPattern] = useState([])
    const [winner, setWinner] = useState('')

    useEffect(() => {
        let b = [];
        for (let r = 0; r < c4rows; r++) {
            let row = [];
            for (let c = 0; c < c4columns; c++) { row.push(null) }
            b.push(row);
        }

        setBoard(b)
        setCurrentPlayer(player1)
        setGameOver(false)
        setWiningPattern([])
    }, [])

    const play = (c,) => {
        if (!gameOver) {
            let b = board;
            for (let r = 7; r >= 0; r--) {
                if (!board[r][c]) {
                    board[r][c] = currentPlayer;
                    break;
                }
            }

            let result = checkAll(board);
            if (result === player1) {
                setBoard(b)
                setGameOver(true)
                setWinner(player1.toString())
            } else if (result === player2) {
                setBoard(b)
                setGameOver(true)
                setWinner(player2.toString())
            } else if (result === 'draw') {
                setBoard(b)
                setGameOver(true)
                alert("It's a draw!")
            } else {
                setBoard(b)
                setCurrentPlayer(togglePlayer())
            }
        } else {
            alert("Game over. Please start a new game.")
        }
    }

    const checkVertical = (board) => {
        for (let r = 3; r < c4rows; r++) {
            for (let c = 0; c < c4columns; c++) {
                if (board[r][c]) {
                    if (board[r][c] === board[r - 1][c] &&
                        board[r][c] === board[r - 2][c] &&
                        board[r][c] === board[r - 3][c]) {
                        let pattern = [{ [r]: [c], [r - 1]: [c], [r - 2]: [c], [r - 3]: [c] }]
                        setWiningPattern(pattern)
                        return board[r][c];
                    }
                }
            }
        }
    }

    const checkHorizontal = (board) => {
        for (let r = 0; r < c4rows; r++) {
            for (let c = 0; c < 4; c++) {
                if (board[r][c]) {
                    if (board[r][c] === board[r][c + 1] &&
                        board[r][c] === board[r][c + 2] &&
                        board[r][c] === board[r][c + 3]) {
                        let pattern = [{ [r]: [c, c + 1, c + 2, c + 3] }]
                        setWiningPattern(pattern)
                        return board[r][c];
                    }
                }
            }
        }
    }

    const checkDiagonalRight = (board) => {
        for (let r = 3; r < c4rows; r++) {
            for (let c = 0; c < 4; c++) {
                if (board[r][c]) {
                    if (board[r][c] === board[r - 1][c + 1] &&
                        board[r][c] === board[r - 2][c + 2] &&
                        board[r][c] === board[r - 3][c + 3]) {
                        let pattern = [{ [r]: [c], [r - 1]: [c + 1], [r - 2]: [c + 2], [r - 3]: [c + 3] }]
                        setWiningPattern(pattern)
                        return board[r][c];
                    }
                }
            }
        }
    }

    const checkDiagonalLeft = (board) => {
        for (let r = 3; r < c4rows; r++) {
            for (let c = 3; c < c4columns; c++) {
                if (board[r][c]) {
                    if (board[r][c] === board[r - 1][c - 1] &&
                        board[r][c] === board[r - 2][c - 2] &&
                        board[r][c] === board[r - 3][c - 3]) {
                        let pattern = [{ [r]: [c], [r - 1]: [c - 1], [r - 2]: [c - 2], [r - 3]: [c - 3] }]
                        setWiningPattern(pattern)
                        return board[r][c];
                    }
                }
            }
        }
    }

    const checkDraw = (board) => {
        for (let r = 0; r < c4rows; r++) {
            for (let c = 0; c < c4columns; c++) {
                if (board[r][c] === null) {
                    return null;
                }
            }
        }
        return 'draw';
    }

    const checkAll = (board) => {
        return checkVertical(board) || checkDiagonalRight(board) || checkDiagonalLeft(board) || checkHorizontal(board) || checkDraw(board);
    }

    const togglePlayer = () => {
        return (currentPlayer === player1) ? player2 : player1;
    }

    return (
        <div>
            <Board board={board} currentPlayer={currentPlayer} winner={winner} winingPattern={winingPattern} play={play} />
        </div>

    )
}