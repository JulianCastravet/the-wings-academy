import React from "react";
import "./style.css";

export const WhatWeDo = ({ language }: any) => {
  const training = require("../../assets/training.png");

  const romanian = language.value === "ro";
  const russian = language.value === "ru";
  const english = language.value === "eng";

  return (
    <div id="whatWeDo">
      <h2>
        {romanian && "Ce Oferim?"}
        {russian && "Что Мы Предоставляем?"}
        {english && "What Do We Offer?"}
      </h2>

      <div className="containerWrapper">
        <div className="col1">
          <img src={training} alt="about us img"></img>
        </div>

        <div className="col2">
          {romanian && (
            <div className="aboutUs_text">
              Descoperă ceea ce oferim la The Wings Academy:
              <ul>
                <li>
                  1. Pregătire de înaltă calitate: Oferim pregătire intensivă și
                  specializată pentru interviul de recrutare ca însoțitor de
                  bord. Echipa noastră de experți vă va învăța toate abilitățile
                  și cunoștințele necesare pentru a vă distinge în industria
                  aviației.
                </li>
                <li>
                  2. Suport personalizat: Suntem alături de tine în fiecare pas
                  al călătoriei tale. Oferim suport individualizat și consiliere
                  pentru a vă ajuta să vă atingeți obiectivele și să vă
                  maximizați potențialul.
                </li>
                <li>
                  3. Costuri accesibile: Am creat o alternativă mai ieftină
                  pentru a vă îndeplini visul de a deveni însoțitor de bord,
                  fără a face compromisuri în ceea ce privește calitatea
                  pregătirii. La The Wings Academy, veți obține valoare maximă
                  pentru investiția dvs.
                </li>
                <li>
                  4. Experiență în aviație: Echipa noastră are o vastă
                  experiență în industria aviației și vă va împărtăși
                  cunoștințele și sfaturile practice necesare pentru a vă
                  evidenția în fața angajatorilor.
                </li>
                <li>
                  5. Rezultate dovedite: Suntem mândri de succesul cursanților
                  noștri. Pregătirea noastră eficientă a condus la angajarea cu
                  succes a peste 500 de tineri în domeniul aviației.
                </li>
              </ul>
              Alegeți The Wings Academy pentru a vă transforma visul de a deveni
              însoțitor de bord în realitate. Oferim pregătire de calitate,
              suport personalizat și rezultate demonstrabile. Începeți astăzi
              călătoria către o carieră de succes în aviație!
            </div>
          )}
           {russian && (
            <div className="aboutUs_text">
              Descoperă ceea ce oferim la The Wings Academy:
              <ul>
                <li>
                  1. Pregătire de înaltă calitate: Oferim pregătire intensivă și
                  specializată pentru interviul de recrutare ca însoțitor de
                  bord. Echipa noastră de experți vă va învăța toate abilitățile
                  și cunoștințele necesare pentru a vă distinge în industria
                  aviației.
                </li>
                <li>
                  2. Suport personalizat: Suntem alături de tine în fiecare pas
                  al călătoriei tale. Oferim suport individualizat și consiliere
                  pentru a vă ajuta să vă atingeți obiectivele și să vă
                  maximizați potențialul.
                </li>
                <li>
                  3. Costuri accesibile: Am creat o alternativă mai ieftină
                  pentru a vă îndeplini visul de a deveni însoțitor de bord,
                  fără a face compromisuri în ceea ce privește calitatea
                  pregătirii. La The Wings Academy, veți obține valoare maximă
                  pentru investiția dvs.
                </li>
                <li>
                  4. Experiență în aviație: Echipa noastră are o vastă
                  experiență în industria aviației și vă va împărtăși
                  cunoștințele și sfaturile practice necesare pentru a vă
                  evidenția în fața angajatorilor.
                </li>
                <li>
                  5. Rezultate dovedite: Suntem mândri de succesul cursanților
                  noștri. Pregătirea noastră eficientă a condus la angajarea cu
                  succes a peste 500 de tineri în domeniul aviației.
                </li>
              </ul>
              Alegeți The Wings Academy pentru a vă transforma visul de a deveni
              însoțitor de bord în realitate. Oferim pregătire de calitate,
              suport personalizat și rezultate demonstrabile. Începeți astăzi
              călătoria către o carieră de succes în aviație!
            </div>
          )}
           {english && (
            <div className="aboutUs_text">
              Descoperă ceea ce oferim la The Wings Academy: 
              <ul>
            
                <li>
                  1. Pregătire de înaltă calitate: Oferim pregătire intensivă și
                  specializată pentru interviul de recrutare ca însoțitor de
                  bord. Echipa noastră de experți vă va învăța toate abilitățile
                  și cunoștințele necesare pentru a vă distinge în industria
                  aviației.
                </li>
                <li>
                  2. Suport personalizat: Suntem alături de tine în fiecare pas
                  al călătoriei tale. Oferim suport individualizat și consiliere
                  pentru a vă ajuta să vă atingeți obiectivele și să vă
                  maximizați potențialul.
                </li>
                <li>
                  3. Costuri accesibile: Am creat o alternativă mai ieftină
                  pentru a vă îndeplini visul de a deveni însoțitor de bord,
                  fără a face compromisuri în ceea ce privește calitatea
                  pregătirii. La The Wings Academy, veți obține valoare maximă
                  pentru investiția dvs.
                </li>
                <li>
                  4. Experiență în aviație: Echipa noastră are o vastă
                  experiență în industria aviației și vă va împărtăși
                  cunoștințele și sfaturile practice necesare pentru a vă
                  evidenția în fața angajatorilor.
                </li>
                <li>
                  5. Rezultate dovedite: Suntem mândri de succesul cursanților
                  noștri. Pregătirea noastră eficientă a condus la angajarea cu
                  succes a peste 500 de tineri în domeniul aviației.
                </li>
              </ul>
              
              Alegeți The Wings Academy pentru a vă transforma visul de a deveni
              însoțitor de bord în realitate. Oferim pregătire de calitate,
              suport personalizat și rezultate demonstrabile. Începeți astăzi
              călătoria către o carieră de succes în aviație!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
