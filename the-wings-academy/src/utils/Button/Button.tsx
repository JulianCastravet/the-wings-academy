import React from 'react';
import "./index.css"



export const Button=({title}:any) =>{
    return(
        <div className='btn_wrapper'>
        <button>{title}</button>
        </div>
    )
}