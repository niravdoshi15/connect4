import React from 'react';

const initialState = {
    player1Name: '',
    player2Name: '',
    game: '',
    starts: '',
    showGameModal: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case "Player1":
            return {
                ...state, player1Name: action.value
            };
        case "Player2":
            return {
                ...state, player2Name: action.value
            };
        case "Game":
            return {
                ...state, game: action.value
            };
        case "Starts":
            return {
                ...state, starts: action.value
            };
        case "Game Modal":
            return {
                ...state, showGameModal: action.value
            };
        case "Start Modal":
            return {
                ...state, showStartModal: action.value
            }
    }
}


export const Connect4Context = React.createContext()

export const Provider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    const value = {
        player1Name: state.player1Name,
        player2Name: state.player2Name,
        game: state.game,
        starts: state.starts,
        showGameModal: state.showGameModal,
        showStartModal: state.showStartModal,
        setValue: (type, value) => {dispatch({type: type, value})}
    }
    return <Connect4Context.Provider value={value}>
        {children}
    </Connect4Context.Provider>
}