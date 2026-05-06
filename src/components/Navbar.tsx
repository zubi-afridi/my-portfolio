import { useState } from "react";
import { motion, type Variants, AnimatePresence } from "motion/react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { EASE_OUT, ENTRANCE_DURATION, QUICK_DURATION } from "../lib/animation";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const lightColors = {
    navBg: "bg-white/90 border-slate-200",
    textPrimary: "text-slate-900",
    textSecondary: "text-slate-600",
    textHover: "hover:text-indigo-600",
    textActive: "text-indigo-600",
    indicator: "from-indigo-500 to-blue-500",
    button: "from-indigo-600 to-blue-600",
    toggleBg: "bg-slate-100 hover:bg-slate-200",
    toggleIcon: "text-slate-700",
    mobileMenu: "bg-white border-slate-200",
    mobileToggle: "bg-slate-100 hover:bg-slate-200",
  };

  const darkColors = {
    navBg: "bg-gradient-to-br from-slate-800/95 to-black border-white/10",
    textPrimary: "text-white",
    textSecondary: "text-white",
    textHover: "hover:text-indigo-400",
    textActive: "text-indigo-400",
    indicator: "from-indigo-400 to-cyan-400",
    button: "from-indigo-500 via-indigo-600 to-blue-700",
    toggleBg: "bg-white/5 hover:bg-white/10",
    toggleIcon: "text-yellow-400",
    mobileMenu: "bg-slate-900 border-white/10",
    mobileToggle: "bg-white/5 hover:bg-white/10",
  };

  const colors = darkMode ? darkColors : lightColors;

  const handleNavClick = (itemName: string) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState({}, "", "/");
  };

  const navVariants: Variants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: ENTRANCE_DURATION, ease: EASE_OUT },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: -10, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.06 + i * 0.04, duration: QUICK_DURATION },
    }),
  };

  return (
    <div className="flex justify-center w-full fixed z-50 mt-4 px-4">
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`${colors.navBg} backdrop-blur-xl rounded-2xl shadow-2xl border px-4 md:px-6 py-2 w-full max-w-[calc(100vw-2rem)] md:w-auto md:min-w-fit`}
      >
        <div className="flex items-center justify-between gap-4 md:gap-8">
          <motion.a
            href="/"
            onClick={handleLogoClick}
            whileHover={{ scale: 1.02 }}
            className="flex items-center cursor-pointer shrink-0"
          >
            <span
              className={`text-lg md:text-xl font-bold tracking-tight ${colors.textPrimary}`}
            >
              Zubair<span className="text-indigo-500">.</span>
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className="relative cursor-pointer py-1"
                variants={itemVariants}
                custom={i}
              >
                <span
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    activeSection === item.name.toLowerCase()
                      ? colors.textActive
                      : `${colors.textSecondary} ${colors.textHover}`
                  }`}
                >
                  {item.name}
                </span>

                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-0.25 left-0 h-0.5 w-full bg-linear-to-r ${colors.indicator} rounded-full`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <motion.button
              type="button"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full cursor-pointer transition-all duration-200 ${colors.toggleBg} ${colors.toggleIcon}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(79, 70, 229, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`hidden md:block px-6 py-2 text-sm font-bold rounded-full bg-linear-to-r ${colors.button} text-white shadow-lg shrink-0`}
            >
              Hire Me
            </motion.a>

            <button
              type="button"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-full transition-all duration-200 ${colors.mobileToggle} ${colors.textPrimary}`}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: QUICK_DURATION, ease: "easeOut" }}
              className="md:hidden absolute top-[115%] left-0 w-full px-2"
            >
              <div
                id="mobile-navigation"
                className={`
                  ${
                    darkMode
                      ? "bg-slate-900/95 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                      : "bg-white/95 border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                  } 
                  backdrop-blur-2xl rounded-3xl border p-3 flex flex-col gap-1
                  max-h-[80vh] overflow-y-auto
                `}
              >
                <div className="flex flex-col gap-1 py-2">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      onClick={() => handleNavClick(item.name)}
                      className={`px-5 py-4 rounded-2xl font-bold text-base transition-all active:scale-[0.98] ${
                        activeSection === item.name.toLowerCase()
                          ? `${colors.textActive} ${darkMode ? "bg-indigo-500/10" : "bg-indigo-50"}`
                          : `${colors.textSecondary} ${darkMode ? "hover:bg-white/5" : "hover:bg-slate-100"}`
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                <div
                  className={`h-px w-full opacity-20 my-1 ${darkMode ? "bg-white" : "bg-slate-400"}`}
                />

                <div className="p-2">
                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      block w-full py-4 text-center font-bold text-lg rounded-full 
                      bg-linear-to-r ${colors.button} text-white 
                      shadow-lg shadow-indigo-500/20 active:scale-[0.97] transition-transform
                    `}
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
