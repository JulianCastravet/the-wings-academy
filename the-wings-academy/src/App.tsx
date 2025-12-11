import React from "react";
import { HeroSection } from "./Components/HeroSection/HeroSection";
import { Navigation } from "./Components/Navigation/navigation";
import { BigWrapper } from "./Components/BigWrapper/BigWrapper";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import { WhatWeDo } from "./Components/WhatWeDo/WhatWeDo";
import { Offers } from "./Components/Offers/Offers";
import { Comments } from "./Components/Comments/Comments";
import { Contacts } from "./Components/ContactUs/Contacts";

function App() {
  return (
    <div>
      <Navigation />
      <HeroSection></HeroSection>
      <BigWrapper>
        <AboutUs />
        <WhatWeDo />
        <Offers />
        <Comments />
        <Contacts />
      </BigWrapper>
    </div>
  );
}

export default App;
