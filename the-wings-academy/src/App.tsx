import React, { useCallback, useState } from 'react';
import { OptionType} from "./utils/interfaces"
import Flag from 'react-world-flags';
import { HeroSection } from './Components/HeroSection/HeroSection';
import { Navigation } from './Components/Navigation/navigation';
import { BigWrapper } from './Components/BigWrapper/BigWrapper';
import { AboutUs } from './Components/AboutUs/AboutUs';
import { WhatWeDo } from './Components/WhatWeDo/WhatWeDo';
import { Offers } from './Components/Offers/Offers';


function App() {

  const [language, setLanguage] = useState({value:"ro",   label: (
    <>
      <Flag code="ro"height={16} /> Romana
    </>
  ) })

  const handleSelectChange = (item:OptionType) => {
    setLanguage(item);
  };



  return (
    <div>
     <Navigation selectValue={language} setSelectValue={handleSelectChange} ></Navigation>
     <HeroSection language={language}></HeroSection>
     <BigWrapper>
      <AboutUs language={language}/>
      <WhatWeDo language={language}/>
      <Offers language={language}/>

     </BigWrapper >
     
    </div>
  );
}


export default App;
