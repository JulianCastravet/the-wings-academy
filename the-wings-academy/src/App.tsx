import React, { useState } from "react";
import { OptionType } from "./utils/interfaces";
import Flag from "react-world-flags";
import { HeroSection } from "./Components/HeroSection/HeroSection";
import { Navigation } from "./Components/Navigation/navigation";
import { BigWrapper } from "./Components/BigWrapper/BigWrapper";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import { WhatWeDo } from "./Components/WhatWeDo/WhatWeDo";
import { Offers } from "./Components/Offers/Offers";
import { Comments } from "./Components/Comments/Comments";
import { Contacts } from "./Components/ContactUs/Contacts";
import { FormThemeProvider } from "react-form-component";

function App() {
  const [language, setLanguage] = useState({
    value: "ro",
    label: (
      <div>
        <Flag code="ro" height={16} /> <span>Română</span>
      </div>
    ),
  });

  const handleSelectChange = (item: OptionType) => {
    setLanguage(item);
  };

  const theme = {};

  return (
    <div>
      <FormThemeProvider theme={{ ...theme }}>
        <Navigation
          selectValue={language}
          setSelectValue={handleSelectChange}
        ></Navigation>
        <HeroSection language={language}></HeroSection>
        <BigWrapper>
          <AboutUs language={language} />
          <WhatWeDo language={language} />
          <Offers language={language} />
          <Comments language={language} />
          <Contacts language={language} />
        </BigWrapper>
      </FormThemeProvider>
    </div>
  );
}

export default App;
