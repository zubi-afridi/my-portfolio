import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { EASE_OUT, QUICK_DURATION } from "../lib/animation";

type ScrollToTopProps = {
  darkMode: boolean;
};

const ScrollToTop = ({ darkMode }: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setScrollProgress(Math.min(100, Math.max(0, progress)));

      if (!skillsSection) {
        setIsVisible(false);
        return;
      }

      const triggerPoint = skillsSection.offsetTop - window.innerHeight * 0.15;
      setIsVisible(scrollTop >= triggerPoint);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ringColor = darkMode ? "#818cf8" : "#4f46e5";
  const ringTrack = darkMode
    ? "rgba(255,255,255,0.12)"
    : "rgba(79,70,229,0.14)";
  const glow = darkMode
    ? "shadow-[0_0_34px_rgba(99,102,241,0.5)]"
    : "shadow-[0_18px_38px_rgba(79,70,229,0.28)]";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.78, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.78, y: 18 }}
          transition={{ duration: QUICK_DURATION, ease: EASE_OUT }}
          className="fixed bottom-5 right-5 z-70 sm:bottom-8 sm:right-8"
        >
          <motion.span
            aria-hidden="true"
            className={`absolute inset-0 rounded-full bg-indigo-500/35 blur-xl ${glow}`}
            animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.18, 0.45] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.button
            type="button"
            aria-label="Back to top"
            title="Back to top"
            onClick={scrollToTop}
            whileHover={{ y: -4, scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            className={`relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full p-0.5 ${glow}`}
            style={{
              background: `conic-gradient(from 180deg, ${ringColor} ${scrollProgress}%, ${ringTrack} ${scrollProgress}%)`,
            }}
          >
            <span
              className={`flex h-full w-full items-center justify-center rounded-full border backdrop-blur-xl ${
                darkMode
                  ? "border-white/15 bg-linear-to-br from-slate-900 via-indigo-950 to-slate-950 text-indigo-100"
                  : "border-white/80 bg-linear-to-br from-white via-indigo-50 to-blue-50 text-indigo-700"
              }`}
            >
              <ArrowUp size={24} strokeWidth={2.7} />
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
