import { DownloadIcon, Mail } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import CV from "../assets/CV.pdf";
import HeroImage from "../assets/coder.png";
import hi from "../assets/hi.png";

interface HeroProps {
  darkMode: boolean;
}

const Hero = ({ darkMode }: HeroProps) => {
  const socialIcons = [
    { icon: github, alt: "github", link: "https://github.com/zubi-afridi" },
    {
      icon: linkedin,
      alt: "linkedin",
      link: "https://www.linkedin.com/in/zubair-khan-web-developer",
    },
  ];

  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-white/60",
    buttonPrimary: "from-indigo-500 via-indigo-600 to-blue-700",
    buttonSecondaryBorder: "border-indigo-400",
    buttonSecondaryText: "text-white",
    buttonSecondaryHover: "hover:bg-white/10",
    decorativeCircle: "bg-indigo-500 opacity-10",
  };

  const lightTheme = {
    textPrimary: "text-slate-900",
    textSecondary: "text-slate-500",
    buttonPrimary: "from-indigo-600 to-blue-600",
    buttonSecondaryBorder: "border-indigo-600",
    buttonSecondaryText: "text-slate-900",
    buttonSecondaryHover: "hover:bg-slate-100",
    decorativeCircle: "bg-indigo-500 opacity-20",
  };

  const theme = darkMode ? darkTheme : lightTheme;

  // ── Animation variants ──────────────────────────────────────────────────────

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.13,
        delayChildren: 0.25,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const iconPop: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.7 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.34, 1.4, 0.64, 1] as const },
    },
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 70 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const, delay: 0.35 },
    },
  };

  const hiBounce: Variants = {
    hidden: { opacity: 0, scale: 0, rotate: -20 },
    visible: {
      opacity: 0.9,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.65,
        ease: [0.34, 1.56, 0.64, 1] as const,
        delay: 1.0,
      },
    },
  };

  const circleFade: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 0.1,
      scale: 1,
      transition: { duration: 1.4, ease: "easeOut", delay: 0.6 },
    },
  };

  // ────────────────────────────────────────────────────────────────────────────

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
      <section id="home" className="body-font z-10">
        <div className="container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-32 flex-col-reverse lg:flex-row items-center justify-between lg:mt-0 mt-14">
          {/* ── Left: staggered children ── */}
          <motion.div
            className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Social icons row — inner stagger */}
            <motion.div
              className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full"
              variants={containerVariants}
            >
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  variants={iconPop}
                  whileHover={{ scale: 1.12 }}
                  className="transition-transform duration-300"
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${
                      darkMode ? "" : "filter brightness-75"
                    }`}
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
            >
              Hi, I'm Zubair Khan
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
            >
              I am a Frontend Developer with a passion for building beautiful
              and user-friendly web applications. I am a quick learner and a
              team player. I am looking for a challenging opportunity to
              contribute my skills and grow as a developer.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={fadeUp} className="w-full pt-4 sm:pt-6">
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                <a href={CV} download className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 0px 28px rgba(79,70,229,0.45)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className={`cursor-pointer w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r ${theme.buttonPrimary} border-0 py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold transition-colors duration-300`}
                  >
                    <DownloadIcon className="w-4 h-4 sm:h-5 sm:w-5 mr-2" />
                    Download CV
                  </motion.button>
                </a>

                <a href="#contact" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 0px 28px rgba(79,70,229,0.25)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className={`cursor-pointer w-full sm:w-auto inline-flex items-center justify-center ${theme.buttonSecondaryText} border-2 ${theme.buttonSecondaryBorder} ${theme.buttonSecondaryHover} py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold transition-all duration-300`}
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Contact Me
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: image slides in from right ── */}
          <motion.div
            className="lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center"
            variants={slideInRight}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-4/5 sm:w-3/4 lg:w-full">
              {/* Blob background behind hero image */}
              <div
                className="absolute inset-0 -z-10 scale-110"
                // style={{
                //   background: darkMode
                //     ? "radial-gradient(ellipse at 55% 60%, rgba(99,102,241,0.38) 0%, rgba(79,70,229,0.22) 40%, rgba(139,92,246,0.10) 65%, transparent 80%)"
                //     : "radial-gradient(ellipse at 55% 60%, rgba(99,102,241,0.25) 0%, rgba(139,92,246,0.14) 45%, transparent 75%)",
                //   borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
                //   filter: "blur(22px)",
                // }}
              />

              <div className="relative overflow-hidden">
                <motion.img
                  src={HeroImage}
                  alt="Hero Image"
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>

              {/* Hi bubble: springs in after image settles */}
              <motion.img
                src={hi}
                alt="Hi icon"
                variants={hiBounce}
                initial="hidden"
                animate="visible"
                className="absolute -top-4 sm:top-4 left-6 sm:left-20 w-14 h-14 sm:w-20 sm:h-20 object-contain animate-bounce z-10"
              />
            </div>
          </motion.div>
        </div>

        {/* Decorative circle blooms in slowly */}
        <motion.div
          variants={circleFade}
          initial="hidden"
          animate="visible"
          className={`absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 ${theme.decorativeCircle} rounded-full mix-blend-multiply filter blur-3xl animate-pulse hidden sm:block`}
        />
      </section>
    </div>
  );
};

export default Hero;
