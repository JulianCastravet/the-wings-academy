import React from "react";
import "./heroSection.css";
import { Title } from "../../utils/Title/Title";
import { useLanguage } from "../../utils/contexts/languageContext";
import { texts } from "../../utils/texts";

export const HeroSection = () => {
  const { language } = useLanguage();

  return (
    <div className="heroSection">
      <Title white text={texts.heroTitles[language.value]}></Title>
    </div>
  );
};
