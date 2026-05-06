import { useState, useEffect, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Critical components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PortfolioLoader from "./components/PortfolioLoader";

// Lazy-loaded components
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

import { AOS_DURATION, LOADER_DURATION } from "./lib/animation";

const THEME_STORAGE_KEY = "theme";
const AOS_ANIMATION_ATTRIBUTES = [
  "data-aos",
  "data-aos-delay",
  "data-aos-duration",
  "data-aos-easing",
  "data-aos-offset",
  "data-aos-anchor",
  "data-aos-anchor-placement",
  "data-aos-once",
];

const getAosTiming = (element: HTMLElement) => {
  const delay = Number(element.getAttribute("data-aos-delay") ?? 0);
  const duration = Number(
    element.getAttribute("data-aos-duration") ?? AOS_DURATION,
  );

  return {
    delay: Number.isFinite(delay) ? delay : 0,
    duration: Number.isFinite(duration) ? duration : AOS_DURATION,
  };
};

const removeAosAnimation = (element: HTMLElement) => {
  AOS_ANIMATION_ATTRIBUTES.forEach((attribute) => {
    element.removeAttribute(attribute);
  });

  element.classList.remove("aos-init", "aos-animate");
};

const removeAnimatedAosElements = () => {
  document.querySelectorAll<HTMLElement>("[data-aos].aos-animate").forEach(
    (element) => {
      removeAosAnimation(element);
    },
  );
};

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
    const handleAosIn = (event: Event) => {
      const element = (event as CustomEvent<HTMLElement>).detail;

      if (!(element instanceof HTMLElement)) {
        return;
      }

      const { delay, duration } = getAosTiming(element);

      window.setTimeout(() => {
        removeAosAnimation(element);
      }, delay + duration + 80);
    };

    document.addEventListener("aos:in", handleAosIn);

    AOS.init({
      duration: AOS_DURATION,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });

    return () => {
      document.removeEventListener("aos:in", handleAosIn);
    };
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
    removeAnimatedAosElements();
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
          <Suspense fallback={null}>
            <Navbar darkMode={darkmode} toggleDarkMode={toggleDarkMode} />
            <main>
              <Hero darkMode={darkmode} />
              <About darkMode={darkmode} />
              <Skills darkMode={darkmode} />
              <Projects darkMode={darkmode} />
              <Contact darkMode={darkmode} />
            </main>
            <Footer darkMode={darkmode} />
            <ScrollToTop darkMode={darkmode} />
          </Suspense>
        )}
      </div>
    </>
  );
};

export default App;
