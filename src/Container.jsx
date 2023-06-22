import React, { useContext } from "react";
import Footer from "./components/Footer";
import ChangeLang from "./components/ChangeLang";
import ChangeTheme from "./components/ChangeTheme";
import ThemeContext from "./context/ThemeContext";

const Container = () => {
  const { change } = useContext(ThemeContext);
  return (
    <div className={`container ${change}`}>
      <ChangeTheme />
      <Footer />
      <ChangeLang />
    </div>
  );
};

export default Container;
