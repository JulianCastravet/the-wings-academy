import React from "react";
import "./style.css";
import { Title2 } from "../../utils/Title2/Title2";

export const WhatWeDo = ({ language }: any) => {

  const training = require("../../assets/offers.jpeg");

  const romanian = language.value === "ro";
  const russian = language.value === "ru";
  const english = language.value === "eng";

  return (
    <div id="whatWeDo">
      <div className="containerWrapper">
        <div className="col1">
          <img src={training} alt="about us img"></img>
        </div>

        <div className="col2">
          <div className="wrp">
        {romanian && <Title2 title="Ce Oferim?"></Title2>}
        {russian && <Title2 title="Что Мы Предлагаем?"></Title2>}
        {english && <Title2 title="What Do We Offer?"></Title2>}
          {romanian && (

<>

<div className="aboutUs_text">
              The Wings Academy oferă:
              <ul>
                <li>
                  1. Pregătire intensivă și specializată pentru interviul de recrutare însoțitor de bord.
                </li>
                <li>
                  2. Suport personalizat și consiliere în fiecare etapă a călătoriei tale.
                </li>
                <li>
                  3. Costuri accesibile fără a compromite calitatea pregătirii.
                </li>
                <li>
                  4. Experiență în aviație și sfaturi practice pentru a vă evidenția în fața angajatorilor.
                </li>
                <li>
                  5. Ghidul tău pentru toată cariera.
                </li> <li>
                  6. Dosar perfect pentru a fi top candidat la un interviu de recrutare.
                </li>  
              </ul>
           
            </div></>
           
          )}
           {russian && (
            <div className="aboutUs_text">
             Wings Academy предлагает:
              <ul>
                <li>
                  1. Интенсивную и специализированную подготовку для собеседования на должность бортпроводника.
                </li>
                <li>
                  2. Персонализированную поддержку и руководство на каждом этапе вашего пути.
                </li>
                <li>
                  3. Доступные затраты без ущерба качеству обучения.
                </li>
                <li>
                  4. Опыт в авиации и практические советы, чтобы вы выделялись перед работодателями.
                </li>
                <li>
                  5. Ваш гид на протяжении всей карьеры.
                </li>
                <li>
                  6. Идеальное портфолио, чтобы стать лучшим кандидатом на собеседовании.
                </li>
              </ul>
        
            </div>
          )}
           {english && (
            <div className="aboutUs_text">
              Wings Academy offers:
              <ul>
            
                <li>
                  1. Intensive and specialized training for flight attendant recruitment interviews.
                </li>
                <li>
                  2. Personalized support and guidance at every stage of your journey.
                </li>
                <li>
                  3. Affordable costs without compromising the quality of training.
                </li>
                <li>
                  4. Aviation experience and practical advice to make you stand out to employers.
                </li>
                <li>
               5. Your guide throughout your career.
                </li>
                <li>
               6. A perfect portfolio to become a top candidate in a recruitment interview.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};
