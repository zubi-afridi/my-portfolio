import { DownloadIcon, Mail } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import CV from "../assets/CV.pdf";
import HeroImage from "../assets/coder.webp";
import hi from "../assets/hi.webp";
import { SectionContainer } from "./layout/SectionContainer";
import {
  EASE_OUT,
  ENTRANCE_DURATION,
  POP_EASE,
  QUICK_DURATION,
  STAGGER_INTERVAL,
} from "../lib/animation";

const rotatingLines = [
  "Frontend Website Developer",
  "React & Next.js Developer",
];

interface HeroProps {
  darkMode: boolean;
}

type HeroHeadlineProps = {
  fadeUp: Variants;
  textPrimary: string;
};

const HeroHeadline = ({ fadeUp, textPrimary }: HeroHeadlineProps) => {
  const fullHeadline = "Hi, I'm Zubair Khan";

  return (
    <motion.h1
      variants={fadeUp}
      className={`title-font text-3xl md:text-4xl lg:text-5xl mb-3 font-bold ${textPrimary}`}
    >
      {fullHeadline}
    </motion.h1>
  );
};

type RotatingRoleProps = {
  fadeUp: Variants;
  textPrimary: string;
};

const RotatingRole = ({ fadeUp, textPrimary }: RotatingRoleProps) => {
  return (
    <motion.div
      variants={fadeUp}
      className={`text-xl sm:text-2xl lg:text-3xl font-medium mb-6 min-h-[1.5em] ${textPrimary} opacity-90`}
    >
      <span className="text-indigo-600 dark:text-indigo-400">
        {rotatingLines[0]}
      </span>
    </motion.div>
  );
};

const Hero = ({ darkMode }: HeroProps) => {
  const socialIcons = [
    {
      Icon: FaGithub,
      label: "GitHub",
      link: "https://github.com/zubi-afridi",
      iconClass: darkMode ? "text-white" : "text-slate-900",
    },
    {
      Icon: FaLinkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/zubair-khan-web-developer",
      iconClass: "text-[#0a66c2]",
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
        staggerChildren: STAGGER_INTERVAL,
        delayChildren: 0.12,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: ENTRANCE_DURATION, ease: EASE_OUT },
    },
  };

  const iconPop: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.7 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: ENTRANCE_DURATION, ease: POP_EASE },
    },
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 70 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: ENTRANCE_DURATION,
        ease: EASE_OUT,
        delay: 0.12,
      },
    },
  };

  const hiBounce: Variants = {
    hidden: { opacity: 0, scale: 0, rotate: -20 },
    visible: {
      opacity: 0.9,
      scale: 1,
      rotate: 0,
      transition: {
        duration: ENTRANCE_DURATION,
        ease: POP_EASE,
        delay: 0.46,
      },
    },
  };

  const circleFade: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 0.1,
      scale: 1,
      transition: { duration: ENTRANCE_DURATION, ease: "easeOut", delay: 0.18 },
    },
  };

  const floating: Variants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // ── Typewriter Logic ──────────────────────────────────────────────────────
  // ────────────────────────────────────────────────────────────────────────────

  return (
    <section
      id="home"
      className="body-font relative z-10 flex items-center overflow-hidden"
    >
      <SectionContainer className="flex flex-col-reverse items-center justify-between pb-6 pt-24 sm:pb-8 sm:pt-28 lg:flex-row lg:pb-10 lg:pt-32">
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
              {socialIcons.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Zubair Khan on ${social.label}`}
                  variants={iconPop}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.Icon
                    aria-hidden="true"
                    className={`h-8 w-8 object-contain sm:h-10 sm:w-10 ${social.iconClass}`}
                  />
                </motion.a>
              ))}
            </motion.div>

            <HeroHeadline fadeUp={fadeUp} textPrimary={theme.textPrimary} />
            <RotatingRole fadeUp={fadeUp} textPrimary={theme.textPrimary} />

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary} text-base sm:text-lg`}
            >
              I build clean, responsive, and performance-focused web interfaces
              using React, Next.js, Tailwind CSS, and modern frontend tools. I
              focus on creating smooth animations, intuitive layouts, and
              user-friendly digital experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={fadeUp} className="w-full pt-4 sm:pt-6">
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                <motion.a
                  href={CV}
                  download
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 28px rgba(79,70,229,0.45)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className={`cursor-pointer w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r ${theme.buttonPrimary} border-0 py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold transition-colors duration-200`}
                >
                  <DownloadIcon className="w-4 h-4 sm:h-5 sm:w-5 mr-2" />
                  Download CV
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 28px rgba(79,70,229,0.25)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className={`cursor-pointer w-full sm:w-auto inline-flex items-center justify-center ${theme.buttonSecondaryText} border-2 ${theme.buttonSecondaryBorder} ${theme.buttonSecondaryHover} py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold transition-all duration-200`}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Contact Me
                </motion.a>
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
              {/* Blob backgrounds behind hero image */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div
                  className={`absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full mix-blend-multiply filter blur-[50px] opacity-30 animate-blob ${
                    darkMode ? "bg-indigo-600" : "bg-indigo-400"
                  }`}
                />
                <div
                  className={`absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full mix-blend-multiply filter blur-[50px] opacity-30 animate-blob animation-delay-2000 ${
                    darkMode ? "bg-purple-600" : "bg-blue-400"
                  } -right-4 -top-4`}
                />
              </div>

              <motion.div
                className="relative overflow-hidden"
                variants={floating}
                animate="animate"
              >
                <motion.img
                  src={HeroImage}
                  alt="Zubair Khan frontend developer illustration"
                  width={640}
                  height={640}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-auto object-cover drop-shadow-2xl"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: QUICK_DURATION, ease: "easeOut" }}
                />
              </motion.div>

              {/* Hi bubble: springs in after image settles */}
              <motion.img
                src={hi}
                alt="Hi icon"
                width={512}
                height={512}
                loading="eager"
                decoding="async"
                variants={hiBounce}
                initial="hidden"
                animate="visible"
                className="absolute -top-4 sm:top-4 left-6 sm:left-20 w-14 h-14 sm:w-20 sm:h-20 object-contain animate-bounce z-10"
              />
            </div>
          </motion.div>
      </SectionContainer>

      {/* Decorative circle blooms in slowly */}
      <motion.div
        variants={circleFade}
        initial="hidden"
        animate="visible"
        className={`absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 ${theme.decorativeCircle} rounded-full mix-blend-multiply filter blur-3xl animate-pulse hidden sm:block`}
      />
    </section>
  );
};

export default Hero;
