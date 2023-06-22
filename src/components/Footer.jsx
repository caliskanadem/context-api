import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LangContext";

const Footer = () => {
  const { change, toogleTheme } = useTheme();

  const { lang } = useLang();
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
