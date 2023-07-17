import React from "react";

import './index.css'
import { Title2 } from "../../utils/Title2/Title2";


export const AboutUs = ({language}:any)=>{

var img = require("../../assets/about_us.jpeg")

    let russian = language.value === "ru";
    let romanian = language.value === "ro";
    let english = language.value === "eng";

    return(
       <div id="aboutUs">
        <div
        className="containerWrapper">
       

            <div className="col1">
              <div className="wrp">

        {romanian && <Title2 title="Despre Noi"></Title2>}
        {russian && <Title2 title="О Нас"></Title2>}
        {english && <Title2 title="About Us"></Title2>}
        {romanian && (
        
        <div className="aboutUs_text">
Wings Academy este o instituție pionieră în aviația din Moldova. Lansată în 2022, oferim pregătire specializată pentru interviurile de recrutare în rolul de însoțitor de bord. Suntem o echipă cu o experiență de peste 8 ani în aviație și avem misiunea de a susține și promova domeniul aviației în Moldova. Ne străduim să motivăm, ghidăm și oferim asistență tinerilor care aspiră să urmeze o carieră în aviație până la momentul angajării. Ne preocupă succesul și dezvoltarea cursanților noștri, iar rezultatele obținute confirmă eficacitatea programelor noastre de pregătire. Până acum, am reușit să insuflăm pasiunea pentru aviație la peste 500 de cursanți.
        </div>
        
        )}
          {russian && (
        
        <div className="aboutUs_text">
        Wings Academy - пионерское учебное заведение в области авиации в Молдове. Запущенное в 2022 году, мы предоставляем специализированную подготовку для собеседований на должность бортпроводника. Мы - команда с опытом работы в авиации более 8 лет, и наша миссия заключается в поддержке и продвижении авиационной отрасли в Молдове. Мы стремимся мотивировать, направлять и оказывать помощь молодым людям, стремящимся начать карьеру в авиации до момента трудоустройства. Нам важен успех и развитие наших студентов, и полученные результаты подтверждают эффективность наших учебных программ. До сих пор нам удалось привить страсть к авиации более чем 500 студентам.
        </div>
        
        )}
          {english && (
        
        <div className="aboutUs_text">
      Wings Academy is a pioneering institution in aviation in Moldova. Launched in 2022, we provide specialized training for recruitment interviews for the role of flight attendant. We are a team with over 8 years of experience in aviation and we have a mission to support and promote the aviation field in Moldova. We strive to motivate, guide, and provide assistance to young people aspiring to pursue a career in aviation until the moment of employment. We are concerned about the success and development of our students, and the results obtained confirm the effectiveness of our training programs. So far, we have managed to instill a passion for aviation in over 500 students.
        </div>
        
        )}
        </div>

            </div>
            <div className="col2">
                <img src={img} alt="about us img"></img>
            </div>

        </div>
        </div>
    )
}