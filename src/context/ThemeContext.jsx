import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const defaultTheme = localStorage.getItem("theme" || "light");

export const ThemeContextProvider = ({ children }) => {
  const [change, setChange] = useState(defaultTheme);

  useEffect(() => {
    localStorage.setItem("theme", change);
  }, [change]);
  const toogleTheme = () => {
    setChange((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ change, setChange, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
