import React from "react";
import "./index.css"

interface props {
    text:string;
    white?:boolean
}

export const Title = (props:props)=>{
 const {text, white} = props;

    return (
        <h1 className={white?"white":""}>{text}</h1>
    )
}