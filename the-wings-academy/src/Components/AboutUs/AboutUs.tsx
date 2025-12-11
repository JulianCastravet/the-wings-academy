import React from "react";

import "./index.css";
import { Title2 } from "../../utils/Title2/Title2";
import { useLanguage } from "../../utils/contexts/languageContext";
import { texts } from "../../utils/texts";

export const AboutUs = () => {
  const { language } = useLanguage();

  return (
    <div id="aboutUs">
      <div className="containerWrapper">
        <div className="col1">
          <div className="wrp">
            <Title2 title={texts.links.about[language.value]}></Title2>

            <div className="aboutUs_text">
              {texts.aboutTexts[language.value]}
            </div>
          </div>
        </div>
        <div className="col2">
          <img src="public/assets/about_us.jpg" alt="about us img"></img>
        </div>
      </div>
    </div>
  );
};
