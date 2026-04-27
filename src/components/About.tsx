import AboutImage from "../assets/about.png";
interface AboutProps {
  darkMode: boolean;
}

const About = ({ darkMode }: AboutProps) => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="600"
          className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1"
        >
          <div className="relative w-72 h-72 lg:w-80 lg:h-80 flex items-center justify-center">
            {/* Image background */}
            <div
              className="absolute -inset-4 lg:-inset-10 bg-linear-to-l from-indigo-500 via-indigo-600 to-blue-700 rotate-12 star-shape z-0"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="600"
            ></div>
            <img
              src={AboutImage}
              alt="About Image"
              className="relative w-full h-full object-contain z-10 transition-all duration-300 drop-shadow-2xl rounded-2xl"
              data-aos="zoom-in"
              data-aos-delay="150"
              data-aos-duration="600"
            />
          </div>
        </figure>
        <article
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="600"
          className="text-center lg:text-left relative order-1 lg:order-2"
        >
          <header>
            <h1
              className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r ${darkMode ? "from-indigo-400 to-blue-500" : "from-indigo-600 to-blue-600"} bg-clip-text`}
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="600"
            >
              About Me
            </h1>
          </header>
          <p
            className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="600"
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
              data-aos-delay="250"
              data-aos-duration="600"
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
              data-aos-delay="300"
              data-aos-duration="600"
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
      </div>
    </section>
  );
};

export default About;
