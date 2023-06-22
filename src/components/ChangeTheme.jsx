import React from "react";
import { useTheme } from "../context/ThemeContext";

const ChangeTheme = () => {
  const { change, toogleTheme } = useTheme();

  return (
    <div>
      <div>active thema: {change}</div>
      <button onClick={toogleTheme}>ChangeTheme</button>
    </div>
  );
};

export default ChangeTheme;
