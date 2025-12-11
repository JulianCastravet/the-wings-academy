import React from "react";
import "./style.css";
import { Title2 } from "../../utils/Title2/Title2";
import { useLanguage } from "../../utils/contexts/languageContext";
import { texts } from "../../utils/texts";

export const WhatWeDo = () => {
  const { language } = useLanguage();

  return (
    <div id="whatWeDo">
      <div className="containerWrapper">
        <div className="col1">
          <img src="/assets/offers.jpeg" alt="about us img"></img>
        </div>

        <div className="col2">
          <div className="wrp">
            <Title2 title={texts.offers[language.value]}></Title2>

            <div className="aboutUs_text">
              {texts.offerHeaders[language.value]}
              <ul>
                {texts.offerItems[language.value].map(
                  (item: string, index: number) => (
                    <li key={index} className="listItem">
                      <span className="checkIcon" /> {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
