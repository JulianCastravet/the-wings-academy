import React from "react";
import { ShowCard } from "../../utils/ShowCard/ShowCard";
import { Title2 } from "../../utils/Title2/Title2";
import "./index.css";
import { Edit } from "../../utils/Icons/Edit";
import { OneToOne } from "../../utils/Icons/OneToOne";
import { Steward } from "../../utils/Icons/Steward";
import { useLanguage } from "../../utils/contexts/languageContext";
import { texts } from "../../utils/texts";

export const Offers = () => {
  const { language } = useLanguage();

  const handleGoTo = (): void => {
    document.location.href = "#contacts";
  };

  return (
    <>
      <div className="containerWrapper">
        <div className="parent">
          <Title2 centered title={texts.extraOffers[language.value]} />

          <div className="offer_wrapper">
            <ShowCard
              btnTitle={texts.btnText.extraOffer[language.value]}
              cardTitle={texts.cartTexts.first[language.value]}
              imgSrc={<OneToOne />}
              onClick={handleGoTo}
            />
            <ShowCard
              zoomed
              btnTitle={texts.btnText.register[language.value]}
              cardTitle={texts.cartTexts.second[language.value]}
              imgSrc={<Steward />}
              onClick={handleGoTo}
            />
            <ShowCard
              btnTitle={texts.btnText.extraOffer[language.value]}
              cardTitle={texts.cartTexts.third[language.value]}
              imgSrc={<Edit />}
              onClick={handleGoTo}
            />
          </div>
        </div>
      </div>
    </>
  );
};
