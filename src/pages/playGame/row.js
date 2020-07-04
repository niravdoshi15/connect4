import React from 'react';
import Tile from './tile.js';

export default ({ play, row, winningCols }) => {
    let rowOutput = Object.keys(row).map((i) => {
        return (<Tile key={i} value={row[i]} columnIndex={i} play={play} winningCols={winningCols} />)
    });
    return (<tr>{rowOutput}</tr>)
}