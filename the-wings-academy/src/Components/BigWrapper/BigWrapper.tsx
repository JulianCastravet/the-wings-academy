import React from "react";
import "./index.css"

export const BigWrapper=({children}:any):JSX.Element=>{

    return (
        <div className="bigWrapper">
{children}
        </div>
    )
}