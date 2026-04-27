import { Globe } from "lucide-react";
import { motion } from "framer-motion";
import githubAsset from "../assets/github.png";
import livyAsset from "../assets/livy.png";
import BrFunnel from "../assets/br-funnel.png";
import BankWebsite from "../assets/bank.png";
import Restaurant from "../assets/restaurant.png";

import { LuSquareArrowOutUpRight } from "react-icons/lu";
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
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Motion"],
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
    <section id="projects" className="py-20 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-8 lg:px-14">
        <header className="text-center mb-16" data-aos="fade-up">
          <h2
            className={`text-4xl md:text-5xl font-bold pb-2 mb-2 bg-linear-to-r ${darkMode ? "from-indigo-400 to-blue-500" : "from-indigo-600 to-blue-600"} bg-clip-text text-transparent`}
          >
            My Projects
          </h2>
          <div
            className={`h-1.5 w-24 mx-auto rounded-full bg-linear-to-r from-indigo-500 to-blue-500 mb-8`}
          ></div>
          <p
            className={`max-w-2xl mx-auto text-lg ${
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
              data-aos-delay={100 * (index % 2)}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 ${
                darkMode
                  ? "bg-gray-800/40 border border-gray-700 hover:border-indigo-500/50"
                  : "bg-white border border-gray-200 hover:border-indigo-400 shadow-xl"
              } backdrop-blur-sm`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors`}
                    >
                      <Globe size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-900 text-white rounded-full hover:bg-black transition-colors border border-white/20"
                    >
                      <img
                        src={githubAsset}
                        alt="GitHub"
                        className="w-5 h-5 invert"
                      />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Content */}
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
                <div className="flex items-center justify-between">
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
                    href={project.liveLink}
                    className={`text-sm font-bold flex items-center gap-1 group-hover:text-indigo-500 transition-colors ${
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
      </div>
    </section>
  );
};

export default Projects;
