import React, { useCallback, useState } from 'react';
import { OptionType} from "./utils/interfaces"
import Flag from 'react-world-flags';
import { HeroSection } from './Components/HeroSection/heroSection';
import { Navigation } from './Components/Navigation/navigation';


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
     <HeroSection></HeroSection>
    </div>
  );
}


export default App;
