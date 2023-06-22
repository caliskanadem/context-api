import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LangContext from "../context/LangContext";

const Footer = () => {
  const { change, toogleTheme } = useContext(ThemeContext);

  const { lang, setLang } = useContext(LangContext);
  return (
    <div>
      <hr />
      <div>Footer</div>
      <div>active theme: {change}</div>
      <div>Active Language: {lang}</div>

      <button onClick={toogleTheme}>ChangeTheme</button>
    </div>
  );
};

export default Footer;
