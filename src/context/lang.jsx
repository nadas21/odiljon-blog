import { createContext, useEffect, useState } from "react";

export const langContext = createContext();

export const ContextProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "uz");

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  return <langContext.Provider value={{lang, setLang}}>{children}</langContext.Provider>
};