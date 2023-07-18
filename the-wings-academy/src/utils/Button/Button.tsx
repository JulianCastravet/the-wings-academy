import React from 'react';
import "./index.css"



export const Button=({title, onClick}:any) =>{
    return(
        <div className='btn_wrapper'>
        <button onClick={onClick}>{title}</button>
        </div>
    )
}