import { motion } from "framer-motion";
import { SectionContainer } from "./layout/SectionContainer";

const Footer = ({ darkMode }: { darkMode: boolean }) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const theme = {
    bg: "bg-transparent",
    border: darkMode ? "border-slate-800" : "border-slate-200",
    textPrimary: darkMode ? "text-white" : "text-slate-900",
    textSecondary: darkMode ? "text-slate-400" : "text-slate-500",
    linkColor: darkMode ? "text-white" : "text-slate-900",
    hover: darkMode ? "hover:text-indigo-400" : "hover:text-indigo-600",
  };

  return (
    <footer
      className={`${theme.bg} ${theme.border} border-t py-10 transition-all duration-300`}
    >
      <SectionContainer className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-4">
        {/* Left: Branding */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2
            className={`text-2xl font-bold ${theme.textPrimary} tracking-tight`}
          >
            Zubair Khan<span className="text-indigo-600">.</span>
          </h2>
          <p className={`text-sm ${theme.textSecondary} mt-1 font-medium`}>
            Frontend Website Developer
          </p>
        </div>

        {/* Center: Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-sm font-semibold transition-colors duration-200 ${theme.linkColor} ${theme.hover}`}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Right: Copyright */}
        <div
          className={`text-sm ${theme.textSecondary} font-medium text-center lg:text-right`}
        >
          <p>
            @ {currentYear} Made by{" "}
            <span className={theme.textPrimary}>Zubair Khan</span>
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
};

export default Footer;
