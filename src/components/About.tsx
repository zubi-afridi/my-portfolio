import AboutImage from "../assets/about.webp";
import { AOS_DELAY_STEP, AOS_DURATION } from "../lib/animation";
import { Section, SectionContainer } from "./layout/SectionContainer";

interface AboutProps {
  darkMode: boolean;
}

const About = ({ darkMode }: AboutProps) => {
  return (
    <Section
      id="about"
      className="flex items-center justify-center !pt-4 sm:!pt-6 lg:!pt-8"
    >
      <SectionContainer className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2">
        <figure
          data-aos="fade-up"
          data-aos-delay={AOS_DELAY_STEP}
          data-aos-duration={AOS_DURATION}
          className="flex flex-wrap justify-center gap-4 relative order-1"
        >
          <div className="relative w-72 h-72 lg:w-80 lg:h-80 flex items-center justify-center">
            {/* Image background */}
            <div
              className="about-image-blob absolute -inset-4 -rotate-6 lg:-inset-10"
              data-aos="zoom-in"
              data-aos-delay={AOS_DELAY_STEP * 2}
              data-aos-duration={AOS_DURATION}
            ></div>
            <img
              src={AboutImage}
              alt="Zubair Khan profile illustration"
              width={577}
              height={433}
              loading="lazy"
              decoding="async"
              className="relative w-full h-full object-contain z-10 transition-all duration-200 drop-shadow-2xl rounded-2xl"
              data-aos="zoom-in"
              data-aos-delay={AOS_DELAY_STEP + 40}
              data-aos-duration={AOS_DURATION}
            />
          </div>
        </figure>
        <article
          data-aos="fade-left"
          data-aos-delay={AOS_DELAY_STEP}
          data-aos-duration={AOS_DURATION}
          className="text-center lg:text-left relative order-2"
        >
          <header>
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r ${darkMode ? "from-indigo-400 to-blue-500" : "from-indigo-600 to-blue-600"} bg-clip-text`}
              data-aos="fade-up"
              data-aos-delay={AOS_DELAY_STEP + 40}
              data-aos-duration={AOS_DURATION}
            >
              About Me
            </h1>
          </header>
          <p
            className={`text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
            data-aos="fade-up"
            data-aos-delay={AOS_DELAY_STEP * 2}
            data-aos-duration={AOS_DURATION}
          >
            I’m Zubair Khan, a Frontend Developer focused on building clean,
            responsive, and interactive web interfaces. With a Software
            Engineering background, I work with React, Next.js, Tailwind CSS,
            Framer Motion, and modern frontend tools to create smooth and
            user-friendly digital experiences. I enjoy solving UI challenges,
            writing clean code, and transforming ideas into practical,
            performance-focused websites.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12 mb-6 sm:mb-8">
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay={AOS_DELAY_STEP * 2 + 40}
              data-aos-duration={AOS_DURATION}
            >
              <div
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}
              >
                1+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Year Experience
              </div>
            </div>
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay={AOS_DELAY_STEP * 3}
              data-aos-duration={AOS_DURATION}
            >
              <div
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}
              >
                10+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Projects Completed
              </div>
            </div>
          </div>
        </article>
      </SectionContainer>
    </Section>
  );
};

export default About;
