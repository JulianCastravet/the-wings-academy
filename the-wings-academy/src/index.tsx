import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "react-jss";
import { LanguageProvider } from "./utils/contexts/languageContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

interface AppTheme {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  background: string;
  text: string;
}

export const theme: AppTheme = {
  primary: "#007bff",
  secondary: "#6c757d",
  success: "#28a745",
  danger: "#dc3545",
  background: "#ffffff",
  text: "#212529",
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);
