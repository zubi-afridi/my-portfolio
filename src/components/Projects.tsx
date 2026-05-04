import { Globe } from "lucide-react";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import livyAsset from "../assets/optimized/livy.webp";
import BrFunnel from "../assets/optimized/br-funnel.webp";
import BankWebsite from "../assets/optimized/bank.webp";
import Restaurant from "../assets/optimized/restaurant.webp";

import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { AOS_DELAY_STEP, AOS_DURATION } from "../lib/animation";
import { Section, SectionContainer } from "./layout/SectionContainer";

interface Project {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Real Estate Website",
    description:
      "A property management platform focused on seamless booking and smooth user experience.",
    image: livyAsset,
    liveLink: "https://livystay-website.vercel.app/",
    githubLink: "https://github.com/zubi-afridi/Livy-Website",
    tags: ["Next", "Tailwind", "TS", "Motion"],
  },
  {
    title: "Marketing Website",
    description:
      "A modern, high-converting React landing page built for agencies focused on scaling revenue through Email & SMS marketing.",
    image: BrFunnel,
    liveLink: "https://br-funnels.vercel.app/",
    githubLink: "https://github.com/zubi-afridi/BR-Funnel",
    tags: ["React", "Motion", "Ant Design"],
  },
  {
    title: "Banking Website",
    description:
      "A professional, modern banking website UI with smooth animations and a premium feel.",
    image: BankWebsite,
    liveLink: "https://hoo-bank-ui-sigma.vercel.app/",
    githubLink: "https://github.com/zubi-afridi/Opal-Bank-UI",
    tags: ["React", "Motion", "Sass"],
  },
  {
    title: "Restaurant Website",
    description:
      "A professional restaurant website UI with smooth animations and a premium feel.",
    image: Restaurant,
    liveLink: "https://zubair-khan-grilli-restaurant.netlify.app/",
    githubLink: "https://github.com/zubi-afridi/Restaurant-Website",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <Section id="projects" className="transition-colors duration-200">
      <SectionContainer>
        <header
          className="text-center mb-16"
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
            My Projects
          </h2>

          <div className="h-1.5 w-24 mx-auto rounded-full bg-linear-to-r from-indigo-500 to-blue-500 mb-8"></div>

          <p
            className={`max-w-2xl mx-auto text-base sm:text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Here are some of the projects I've worked on. Each one represents a
            unique challenge and a step forward in my journey.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={AOS_DELAY_STEP * (index % 2)}
              data-aos-duration={AOS_DURATION}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800/40 border border-gray-700 hover:border-indigo-500/50"
                  : "bg-white border border-gray-200 hover:border-indigo-400 shadow-xl"
              } backdrop-blur-sm`}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  width={960}
                  height={540}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-6">
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live demo for ${project.title}`}
                      className="p-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors duration-200"
                    >
                      <Globe aria-hidden="true" size={20} />
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open GitHub repository for ${project.title}`}
                      className="p-3 bg-gray-900 text-white rounded-full hover:bg-black transition-colors duration-200 border border-white/20"
                    >
                      <FaGithub aria-hidden="true" className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`mb-6 line-clamp-2 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.liveLink}
                    className={`text-sm font-bold flex items-center gap-1 group-hover:text-indigo-500 transition-colors duration-200 whitespace-nowrap ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Live Demo
                    <LuSquareArrowOutUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-12 flex justify-center"
          data-aos="fade-up"
          data-aos-duration={AOS_DURATION}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/zubi-afridi?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-indigo-500 px-8 py-3 text-sm sm:text-base font-bold text-white transition-colors duration-200 hover:bg-indigo-600"
          >
            More Projects
            <LuSquareArrowOutUpRight size={18} />
          </motion.a>
        </div>
      </SectionContainer>
    </Section>
  );
};

export default Projects;
