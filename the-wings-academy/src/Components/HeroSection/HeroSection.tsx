import React from "react"
import "./heroSection.css"
import { Title } from "../../utils/Title/Title"

export const HeroSection = ({language}:any)=>{

    const russian = language.value === "ru"
    const english = language.value === "eng"
    const romanian = language.value === "ro"
    return (
        <div className="heroSection">
           {romanian && <Title white text="Primul tău ghid de Aviație din Moldova."></Title>}
            {russian && <Title white text="Ваш первый авиационный гид в Молдове."></Title>}
           {english &&  <Title white text="Your First Aviation Guide in Moldova."></Title>}
        </div>
    )
}