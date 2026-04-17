import { motion } from "framer-motion";
import { 
  Layout, 
  Cpu, 
  Globe, 
  Database, 
  Zap, 
  Shield, 
  Terminal,
  Layers,
  Component,
  Boxes,
  Palette,
  Wind,
  MousePointer2,
  GitBranch,
  Monitor
} from "lucide-react";


interface Skill {
  name: string;
  icon: any; // Using Lucide icons
}

const row1: Skill[] = [
  { name: "HTML", icon: Layout },
  { name: "CSS", icon: Palette },
  { name: "JavaScript", icon: Globe },
  { name: "React", icon: Cpu },
  { name: "Next.js", icon: Monitor },
  { name: "Axios", icon: Zap },
  { name: "TanStack Query", icon: Database },
  { name: "Redux Toolkit", icon: Layers },
  { name: "Zustand", icon: Boxes },
];

const row2: Skill[] = [
  { name: "Tailwind CSS", icon: Wind },
  { name: "GSAP", icon: Zap },
  { name: "Framer Motion", icon: MousePointer2 },
  { name: "Vite", icon: Terminal },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Terminal },

  { name: "Ant Design", icon: Component },
  { name: "Chakra UI", icon: Shield },
  { name: "Material UI", icon: Layers },
  { name: "Shadcn UI", icon: Layout },
];

const MarqueeRow = ({ skills, direction = "left", darkMode }: { skills: Skill[], direction?: "left" | "right", darkMode: boolean }) => {
  // Triple the skills to ensure there are no gaps during the animation
  const duplicatedSkills = [...skills, ...skills, ...skills];
  const animationName = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="flex overflow-hidden select-none py-4 group">
      <div 
        className={`flex space-x-6 min-w-full animate-${animationName} group-hover:[animation-play-state:paused]`}
      >
        {duplicatedSkills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`flex items-center gap-3 px-6 py-4 rounded-2xl whitespace-nowrap transition-all duration-300
              ${darkMode 
                ? "bg-gray-800/40 border border-gray-700 hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)]" 
                : "bg-white border border-gray-200 hover:border-orange-400 hover:shadow-lg"
              }
              backdrop-blur-sm group cursor-pointer
            `}
          >
            <skill.icon className={`w-6 h-6 ${darkMode ? "text-orange-400" : "text-orange-500"} group-hover:scale-110 transition-transform`} />
            <span className={`text-lg font-medium ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

const Skills = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section id="skills" className={`py-20 overflow-hidden ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className={`h-1.5 w-24 mx-auto rounded-full bg-linear-to-r from-orange-500 to-amber-500 mb-8`}></div>
          <p className={`max-w-2xl mx-auto text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            I work with a variety of modern technologies to build high-performance, 
            responsive, and visually stunning web applications.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Gradient overlays for the fade effect at edges */}
        <div className={`absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none bg-linear-to-r ${darkMode ? "from-gray-900" : "from-gray-50"} to-transparent`}></div>
        <div className={`absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none bg-linear-to-l ${darkMode ? "from-gray-900" : "from-gray-50"} to-transparent`}></div>

        <div className="space-y-4">
          <MarqueeRow skills={row1} direction="left" darkMode={darkMode} />
          <MarqueeRow skills={row2} direction="right" darkMode={darkMode} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
