import Container from "./Container";
import { LangContextProvider } from "./context/LangContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import "./styles.css";

const App = () => (
  <div>
    <LangContextProvider>
      <ThemeContextProvider>
        <Container />
      </ThemeContextProvider>
    </LangContextProvider>
  </div>
);

export default App;
