import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ChangeTheme = () => {
  const { change, toogleTheme } = useContext(ThemeContext);
  console.log(change);

  return (
    <div>
      <div>active thema: {change}</div>
      <button onClick={toogleTheme}>ChangeTheme</button>
    </div>
  );
};

export default ChangeTheme;
