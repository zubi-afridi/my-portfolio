import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PortfolioLoader from "./components/PortfolioLoader";

const App = () => {
  const [darkmode, setDarkmode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [darkmode]);

  const toggleDarkMode = () => {
    const newMode = !darkmode;
    setDarkmode(newMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      {isLoading && (
        <PortfolioLoader duration={1800} onFinish={() => setIsLoading(false)} />
      )}

      <div
        className={`overflow-x-hidden transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${
          darkmode
            ? "bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen"
            : "bg-linear-to-br from-gray-50 to-blue-50 min-h-screen"
        }`}
      >
        <Navbar darkMode={darkmode} toggleDarkMode={toggleDarkMode} />
        <Hero darkMode={darkmode} />
        <About darkMode={darkmode} />
        <Skills darkMode={darkmode} />
        <Projects darkMode={darkmode} />
        <Contact darkMode={darkmode} />
        <Footer darkMode={darkmode} />
      </div>
    </>
  );
};

export default App;
