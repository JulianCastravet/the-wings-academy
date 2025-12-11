import Flag from "react-world-flags";
import { LanguageKeys } from "./texts";

export interface OptionType {
  value: LanguageKeys;
  label: React.ReactNode;
}
export const languageOptions: OptionType[] = [
  {
    value: "romanian" as LanguageKeys,
    label: (
      <>
        <Flag code="ro" height={20} />
      </>
    ),
  },
  {
    value: "russian" as LanguageKeys,
    label: (
      <>
        <Flag code="ru" height={20} />
      </>
    ),
  },
  {
    value: "english" as LanguageKeys,
    label: (
      <>
        <Flag code="gb" height={16} />
      </>
    ),
  },
];
