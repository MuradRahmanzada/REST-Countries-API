import { useState, useEffect, createContext } from "react";

export const themeContext = createContext();

export const Provider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <themeContext.Provider value={{theme, handleThemeSwitch}}>
      {children}
    </themeContext.Provider>
  );
};

