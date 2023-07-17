import React from "react"
import "./heroSection.css"

export const HeroSection = ({language}:any)=>{

    const russian = language.value === "ru"
    const english = language.value === "eng"
    const romanian = language.value === "ro"
    return (
        <div className="heroSection">
           {romanian && <h1>prima Școală de Aviație din Moldova</h1>}
            {russian && <h1>Первая школа в Молдове для стюардесс</h1>}
           {english &&  <h1>first Moldovan flight attendant school</h1>}
        </div>
    )
}