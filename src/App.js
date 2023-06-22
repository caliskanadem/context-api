import "./App.css";
import ChangeTheme from "./components/ChangeTheme";
import { LangContextProvider } from "./context/LangContext";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <LangContextProvider>
        <ThemeContextProvider>
          <ChangeTheme />
        </ThemeContextProvider>
      </LangContextProvider>
    </div>
  );
}

export default App;
