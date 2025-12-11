import React, { createContext, useContext, useState, ReactNode } from "react";
import Flag from "react-world-flags";
import { LanguageKeys } from "../texts";

export interface Language {
  value: LanguageKeys;
  label: ReactNode;
}

interface LanguageContextType {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>({
    value: "english" as LanguageKeys,
    label: <Flag code="gb" height={20} />,
  });

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
