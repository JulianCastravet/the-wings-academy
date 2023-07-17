import React, { ReactElement, ReactNode } from "react";
import "./index.css"
import { JsxElement } from "typescript";

export const BigWrapper=({children}:any):JSX.Element=>{

    return (
        <div className="bigWrapper">
{children}
        </div>
    )
}