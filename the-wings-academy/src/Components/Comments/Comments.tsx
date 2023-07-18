import React from "react";
//@ts-ignore
import Slider from "react-slick";
import { Title2 } from "../../utils/Title2/Title2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

export const Comments = ({ language }: any) => {
  const english = language.value === "eng";
  const russian = language.value === "ru";
  const romanian = language.value === "ro";
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    autoplay: false,
    centerMode: true,
    adaptiveHeight:true, 
    className: "mySlider",
    centerPadding: "0px",
  };

  return (
    <>
      <div className="containerWrapper">
        <div className="parent">
          {romanian && <Title2 centered title="Comentarii"></Title2>}
          {english && <Title2 centered title="Comments"></Title2>}
          {russian && <Title2 centered title="Комментарии"></Title2>}

          <div className="">
            <Slider {...settings}>
              <div>
                <div className="commentWrapper">
                  <div className="personName">Andrei</div>
                  <div className="personStudy">Absolvent The Wings Academy</div>
                  <div className="personComment">
                    Sunteți o echipă de notă 10. Alături de voi am înțeles că se
                    merită cu adevărat să depui efort pentru un nou început
                    frumos, plin de viață și nu în ultimul rând la înălțime.
                    M-am bucurat să cunosc oameni noi, experiențe noi și nu în
                    ultimul rând să-mi fac noi prieteni. Vă apreciez cu drag cu
                    o notă de 10+ și abia aștept să ne revedem.
                  </div>
                </div>
              </div>

              <div>
                <div className="commentWrapper">
                  <div className="personName">Daniela</div>
                  <div className="personStudy">
                    Absolventă The Wings Academy
                  </div>
                  <div className="personComment">
                    Mă bucur că ați reușit să transmiteți ceea de ce are nevoie
                    cel mai mult un cursant și anume, motivația, admirația,
                    pasiunea, încrederea, entuziasmul, ideea că totul este
                    posibil dacă îți dorești mult acest lucru. Efectiv m-am
                    simțit mult mai încrezută, motivată, fericită să încep o
                    carieră în Aviație pentru că am aflat ceea ce am avut
                    nevoie. Cel mai important e că într-adevăr aceste stări și
                    sentimente sunt adevărate și nimeni nu e aici să te convingă
                    să aplici sau nu, ci pur și simplu îți arată realitatea
                    pentru ca fiecare să poată să decidă dacă e potrivit pentru
                    el acest job.
                  </div>
                </div>
              </div>
              <div>
                <div className="commentWrapper">
                  <div className="personName">Nicoleta</div>
                  <div className="personStudy">
                    Absolventă The Wings Academy
                  </div>
                  <div className="personComment">
                    Cursul a fost excelent! Informațiile au fost prezentate în
                    detaliu și exemplificate clar, facilitând înțelegerea
                    cerințelor interviului. Atmosfera prietenoasă a făcut ca
                    evenimentul să fie relaxant, permițându-ne să asimilăm
                    informațiile mai ușor și să ne facem noi prieteni. Sunt
                    recunoscătoare mentorilor și echipei pentru experiențele lor
                    din industria aviației pe care le-au împărtășit cu răbdare
                    și înțelegere. Cursul a fost un pas important în direcția
                    visului meu și va mulțumesc pentru că oferiți aripi celor
                    care știu ce își doresc. Mulțumesc! ❤✈
                  </div>
                </div>
              </div>
              <div>
                <div className="commentWrapper">
                  <div className="personName">Adelina</div>
                  <div className="personStudy">
                    Absolventă The Wings Academy
                  </div>
                  <div className="personComment">
                    Cursul a fost unul de succes, în special echipa care era
                    formată din persoane cu experiență și un suflet frumos.
                    Totul a decurs minunat, mai mult decât așteptările mele.
                    Bravo și multă baftă "The Wings Academy".
                  </div>
                </div>
              </div>
              <div>
                <div className="commentWrapper">
                  <div className="personName">Valeria</div>
                  <div className="personStudy">
                    Absolventă The Wings Academy
                  </div>
                  <div className="personComment">
                    Pot spune că am înțeles mult mai bine noțiunea de cabin
                    crew, sarcinile acestuia, abilitățile de care trebuie să dea
                    dovadă, atât la interviu, cât și la locul de muncă.. A fost
                    o experiență deosebită, plăcută și unică pe care nu o regret
                    absolut deloc. Vă mulțumesc mult pentru sfaturile și
                    recomandările pe care mi le-ați oferit în cadrul acestui
                    eveniment frumos. ✈
                  </div>
                </div>
              </div>
              <div>
                <div className="commentWrapper">
                  <div className="personName">Nicoleta</div>
                  <div className="personStudy">
                    Absolventă The Wings Academy
                  </div>
                  <div className="personComment">
                    Cursul a fost unul informativ și a pus accent pe informații
                    pe care nu le găsești pe internet. M-am familiarizat cu
                    termenul de cabin crew. Cursul a fost prezentat într-o
                    atmosferă relaxantă și prietenoasă. Succese în continuare
                    echipei "The Wings Academy"! ❤
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
