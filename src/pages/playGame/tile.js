import React from 'react';
import './'

export default ({ play, columnIndex, value, winningCols }) => {
    let space = '';
    columnIndex = parseInt(columnIndex)

    if (value === 1) {
        space = 'player1';
    } else if (value === 2) {
        space = 'player2';
    }

    return (
        <td>
            <div className="tile" onClick={() => play(columnIndex)}>
                {winningCols.includes(columnIndex) ? <div className="win">
                    <div className="circle">
                        {space === 'player1' ? (<div className={[space, 'inner-circle'].join(' ')}></div>) : space === 'player2' ? (<div className={[space, 'inner-circle'].join(' ')}></div>) : null}
                    </div>
                </div> :
                    <div className="circle">
                        {space === 'player1' ? (<div className={[space, 'inner-circle'].join(' ')}></div>) : space === 'player2' ? (<div className={[space, 'inner-circle'].join(' ')}></div>) : null}
                    </div>}

            </div>
        </td>
    );
}