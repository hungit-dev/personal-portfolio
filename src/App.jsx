import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  //implement theme toggler
  //default isDarkMode=true/false depending on whatever is saved
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved == "dark";
  });
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-bs-theme", theme);
  }, [isDarkMode]);
  return (
    <>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Main isDarkMode={isDarkMode} />
      <Footer />
    </>
  );
}

export default App;
