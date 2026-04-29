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
import ScrollToTop from "./components/ScrollToTop";
import { AOS_DURATION, LOADER_DURATION } from "./lib/animation";

const THEME_STORAGE_KEY = "theme";

const getInitialDarkMode = () => {
  if (typeof window === "undefined") {
    return true;
  }

  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (savedTheme === "dark") {
      return true;
    }

    if (savedTheme === "light") {
      return false;
    }
  } catch {
    return true;
  }

  return true;
};

const App = () => {
  const [darkmode, setDarkmode] = useState(getInitialDarkMode);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: AOS_DURATION,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      AOS.refresh();
    }
  }, [isLoading]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkmode);

    try {
      window.localStorage.setItem(
        THEME_STORAGE_KEY,
        darkmode ? "dark" : "light",
      );
    } catch {
      // Theme switching should still work if storage is unavailable.
    }
  }, [darkmode]);

  const toggleDarkMode = () => {
    setDarkmode((currentMode) => !currentMode);
  };

  return (
    <>
      {isLoading && (
        <PortfolioLoader
          duration={LOADER_DURATION}
          onFinish={() => setIsLoading(false)}
        />
      )}

      <div
        className={`overflow-x-hidden ${
          darkmode
            ? "bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen"
            : "bg-linear-to-br from-gray-50 to-blue-50 min-h-screen"
        }`}
      >
        {!isLoading && (
          <>
            <Navbar darkMode={darkmode} toggleDarkMode={toggleDarkMode} />
            <Hero darkMode={darkmode} />
            <About darkMode={darkmode} />
            <Skills darkMode={darkmode} />
            <Projects darkMode={darkmode} />
            <Contact darkMode={darkmode} />
            <Footer darkMode={darkmode} />
            <ScrollToTop darkMode={darkmode} />
          </>
        )}
      </div>
    </>
  );
};

export default App;
