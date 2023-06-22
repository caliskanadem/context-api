import Footer from "./components/Footer";
import ChangeLang from "./components/ChangeLang";
import ChangeTheme from "./components/ChangeTheme";
import { useTheme } from "./context/ThemeContext";

const Container = () => {
  const { change } = useTheme();
  return (
    <div className={`container ${change}`}>
      <ChangeTheme />
      <Footer />
      <ChangeLang />
    </div>
  );
};

export default Container;
