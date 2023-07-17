import React from "react";

import './index.css'


export const AboutUs = ({language}:any)=>{

var img = require("../../assets/about_us.png")

    let russian = language.value === "ru";
    let romanian = language.value === "ro";
    let english = language.value === "eng";

    return(
       <div id="aboutUs">
        <h2>
        {romanian && "Despre Noi"}
        {russian && "О Нас"}
        {english && "About Us"}
    </h2>

        <div
        className="containerWrapper">
       
            <div className="col1">
        {romanian && (
        
        <div className="aboutUs_text">
        Wings Academy este cu adevărat un pionier în domeniul aviației din Moldova, fiind prima instituție care a introdus ideea de pregătire specializată pentru interviurile de recrutare în rolul esențial de însoțitor de bord. Lansată în 2022, soluția noastră alternativă oferă o abordare mult mai accesibilă și mai sigură pentru cei care aspiră să îmbrățișeze această carieră fascinantă.{<br></br>} {<br></br>}
        Suntem o echipă dinamică, cu o experiență în aviație care se întinde pe durata a peste 8 ani. Misiunea noastră este de a susține și a promova domeniul aviației la nivel național, îndemnând tinerii să urmeze această cale prin a-i motiva, a-i ghida și a le oferi asistență până la momentul angajării.{<br></br>} {<br></br>}
    Ne preocupă cu adevărat succesul și dezvoltarea cursanților noștri. Rezultatele pe care le-am obținut până acum confirmă eficacitatea programelor noastre de pregătire.{<br></br>} {<br></br>}
    Prin dedicarea și eforturile noastre, am reușit să insuflăm pasiunea pentru aviație la peste 500 de tineri, ajutându-i să-și realizeze visele și oferindu-le 'aripi'. {<br></br>} {<br></br>}
    La Wings Academy, ne mândrim cu realizările noastre și ne străduim să continuăm să oferim cele mai bune oportunități de pregătire pentru viitorii profesioniști din aviație. Alătură-te nouă și zboară spre succes!
    
        </div>
        
        )}
          {russian && (
        
        <div className="aboutUs_text">
        Wings Academy este cu adevărat un pionier în domeniul aviației din Moldova, fiind prima instituție care a introdus ideea de pregătire specializată pentru interviurile de recrutare în rolul esențial de însoțitor de bord. Lansată în 2022, soluția noastră alternativă oferă o abordare mult mai accesibilă și mai sigură pentru cei care aspiră să îmbrățișeze această carieră fascinantă.{<br></br>} {<br></br>}
        Suntem o echipă dinamică, cu o experiență în aviație care se întinde pe durata a peste 8 ani. Misiunea noastră este de a susține și a promova domeniul aviației la nivel național, îndemnând tinerii să urmeze această cale prin a-i motiva, a-i ghida și a le oferi asistență până la momentul angajării.{<br></br>} {<br></br>}
    Ne preocupă cu adevărat succesul și dezvoltarea cursanților noștri. Rezultatele pe care le-am obținut până acum confirmă eficacitatea programelor noastre de pregătire.{<br></br>} {<br></br>}
    Prin dedicarea și eforturile noastre, am reușit să insuflăm pasiunea pentru aviație la peste 500 de tineri, ajutându-i să-și realizeze visele și oferindu-le 'aripi'. {<br></br>} {<br></br>}
    La Wings Academy, ne mândrim cu realizările noastre și ne străduim să continuăm să oferim cele mai bune oportunități de pregătire pentru viitorii profesioniști din aviație. Alătură-te nouă și zboară spre succes!
    
        </div>
        
        )}
          {english && (
        
        <div className="aboutUs_text">
        Wings Academy este cu adevărat un pionier în domeniul aviației din Moldova, fiind prima instituție care a introdus ideea de pregătire specializată pentru interviurile de recrutare în rolul esențial de însoțitor de bord. Lansată în 2022, soluția noastră alternativă oferă o abordare mult mai accesibilă și mai sigură pentru cei care aspiră să îmbrățișeze această carieră fascinantă.{<br></br>} {<br></br>}
        Suntem o echipă dinamică, cu o experiență în aviație care se întinde pe durata a peste 8 ani. Misiunea noastră este de a susține și a promova domeniul aviației la nivel național, îndemnând tinerii să urmeze această cale prin a-i motiva, a-i ghida și a le oferi asistență până la momentul angajării.{<br></br>} {<br></br>}
    Ne preocupă cu adevărat succesul și dezvoltarea cursanților noștri. Rezultatele pe care le-am obținut până acum confirmă eficacitatea programelor noastre de pregătire.{<br></br>} {<br></br>}
    Prin dedicarea și eforturile noastre, am reușit să insuflăm pasiunea pentru aviație la peste 500 de tineri, ajutându-i să-și realizeze visele și oferindu-le 'aripi'. {<br></br>} {<br></br>}
    La Wings Academy, ne mândrim cu realizările noastre și ne străduim să continuăm să oferim cele mai bune oportunități de pregătire pentru viitorii profesioniști din aviație. Alătură-te nouă și zboară spre succes!
    
        </div>
        
        )}
            </div>
            <div className="col2">
                <img src={img} alt="about us img"></img>
            </div>

        </div>
        </div>
    )
}