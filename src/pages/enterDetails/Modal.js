import React from 'react';
import './enterDetails.css'

export default ({ gameModal, value, setValue1, title, handleOnChange, handleCancel }) => {

    const onCancelClick = (e) => {
        handleCancel(e)
        setValue1('')
    }

    const onOKClick = (e) => {
        handleOnChange(e)
    }

    return (
        <div className="game-modal">
            <span className="modal-title">{title}</span>
            <div className="radio-box">
                {gameModal.map((g, i) => {
                    return <div className="radio-container" key={i}>
                        <div className="radio-div">
                            <input type="radio" value={g.value} checked={value===g.value.toString()} onChange={(e) => setValue1(e.target.value)}/>
                            <label className="radio-text">{g.displayText}</label>
                        </div>
                    </div>
                })
                }
            </div>
            <div className="line-break"></div>
            <button className="cancel-button" value='' onClick={onCancelClick}>
                <label className="cancel-text">Cancel</label>
            </button>
            <button className="ok-button" value={value} onClick={onOKClick}>
                <label className="ok-text">OK</label>
            </button>
        </div>
    )
}