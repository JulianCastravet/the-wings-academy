import React from "react"
import "./index.css"

interface props {
    title:string;
    centered?: boolean;
}
export const Title2 = (props:props)=>{
    const {title,centered} = props;

    return (
        <h2 className={centered?"center":""} >{title}</h2>
    )
}