import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [change, setChange] = useState("light");
  const toogleTheme = () => {
    setChange((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ change, setChange, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
