import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Footer from "./Footer";
import ChangeLang from "./ChangeLang";

const ChangeTheme = () => {
  const { change, toogleTheme } = useContext(ThemeContext);
  console.log(change);

  return (
    <div>
      <div>active thema: {change}</div>
      <button onClick={toogleTheme}>ChangeTheme</button>
      <Footer />
      <ChangeLang />
    </div>
  );
};

export default ChangeTheme;
