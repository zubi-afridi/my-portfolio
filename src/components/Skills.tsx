import { useState } from "react";
import { motion } from "motion/react";
import type { IconType } from "react-icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaAws,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiAxios,
  SiReactquery,
  SiRedux,
  SiFirebase,
  SiTailwindcss,
  SiGreensock,
  SiFramer,
  SiVite,
  SiBootstrap,
  SiVercel,
  SiNetlify,
  SiAntdesign,
  SiChakraui,
  SiMui,
  SiShadcnui,
  SiFigma,
} from "react-icons/si";
import { RiBearSmileLine } from "react-icons/ri";
import { AOS_DURATION } from "../lib/animation";
import { Section, SectionContainer } from "./layout/SectionContainer";

interface Skill {
  name: string;
  icon: IconType;
}

const row1: Skill[] = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Axios", icon: SiAxios },
  { name: "React Query", icon: SiReactquery },
  { name: "Redux Toolkit", icon: SiRedux },
  { name: "Zustand", icon: RiBearSmileLine },
  { name: "Firebase", icon: SiFirebase },
];

const row2: Skill[] = [
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "GSAP", icon: SiGreensock },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Vite", icon: SiVite },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Vercel", icon: SiVercel },
  { name: "Netlify", icon: SiNetlify },
  { name: "AWS", icon: FaAws },
  { name: "Figma", icon: SiFigma },
  { name: "Ant Design", icon: SiAntdesign },
  { name: "Chakra UI", icon: SiChakraui },
  { name: "Material UI", icon: SiMui },
  { name: "Shadcn UI", icon: SiShadcnui },
];

const MarqueeRow = ({
  skills,
  direction = "left",
  darkMode,
}: {
  skills: Skill[];
  direction?: "left" | "right";
  darkMode: boolean;
}) => {
  const [isPaused, setIsPaused] = useState(false);

  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  const renderSkills = () =>
    skills.map((skill, index) => (
      <motion.div
        key={`${skill.name}-${index}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        whileHover={{ scale: 1.05, y: -5 }}
        className={`group/card flex shrink-0 items-center gap-3 px-6 py-4 rounded-2xl whitespace-nowrap transition-all duration-200
          ${
            darkMode
              ? "bg-gray-800/40 border border-gray-700 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(79,70,229,0.1)]"
              : "bg-white border border-gray-200 hover:border-indigo-400 hover:shadow-lg"
          }
          backdrop-blur-sm cursor-pointer
        `}
      >
        <skill.icon
          className={`w-6 h-6 ${
            darkMode ? "text-indigo-400" : "text-indigo-500"
          } ${
            skill.name === "GSAP"
              ? "[&_path]:fill-current [&_*]:fill-current"
              : ""
          } group-hover/card:scale-110 transition-transform duration-200`}
        />
        <span
          className={`text-lg font-medium ${
            darkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          {skill.name}
        </span>
      </motion.div>
    ));

  return (
    <div className="flex overflow-hidden select-none py-4">
      <div
        className={`flex w-max ${animationClass}`}
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        <div className="flex gap-6 pr-6">{renderSkills()}</div>
        <div className="flex gap-6 pr-6" aria-hidden="true">
          {renderSkills()}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 24s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 24s linear infinite;
        }
      `}</style>
    </div>
  );
};

const Skills = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <Section id="skills">
      <SectionContainer className="mb-12 sm:mb-16">
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration={AOS_DURATION}
        >
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold pb-2 mb-2 bg-linear-to-r ${
              darkMode
                ? "from-indigo-400 to-blue-500"
                : "from-indigo-600 to-blue-600"
            } bg-clip-text text-transparent`}
          >
            Technical Skills
          </h2>

          <div className="h-1.5 w-24 mx-auto rounded-full bg-linear-to-r from-indigo-500 to-blue-500 mb-8"></div>

          <p
            className={`max-w-2xl mx-auto text-base sm:text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            I work with a variety of modern technologies to build
            high-performance, responsive, and visually stunning web
            applications.
          </p>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="relative">
          {/* Gradient overlays for the fade effect at edges */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none bg-linear-to-r ${
              darkMode ? "from-gray-900" : "from-gray-50"
            } to-transparent`}
          ></div>

          <div
            className={`absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none bg-linear-to-l ${
              darkMode ? "from-gray-900" : "from-gray-50"
            } to-transparent`}
          ></div>

          <div className="space-y-4">
            <MarqueeRow skills={row1} direction="left" darkMode={darkMode} />
            <MarqueeRow skills={row2} direction="right" darkMode={darkMode} />
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
};

export default Skills;
