import React from 'react'

export function Popup(props){
    return(
        <div className="popup">
            <button className="close-popup" onClick={props.zatvoriSlika}>&times;</button>
            <div className="popup-container">
                <img src={props.photoUrl}/>
            </div>
        </div>
    )
}