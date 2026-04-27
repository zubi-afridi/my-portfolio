import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const Contact = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16" data-aos="fade-up">
          <h2 className={`text-4xl md:text-5xl font-bold pb-2 mb-2 bg-linear-to-r ${darkMode ? "from-indigo-400 to-blue-500" : "from-indigo-600 to-blue-600"} bg-clip-text text-transparent`}>
            Get In Touch
          </h2>
          <div className={`h-1.5 w-24 mx-auto rounded-full bg-linear-to-r from-indigo-500 to-blue-500 mb-8`}></div>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Have a project in mind or just want to say hi? Feel free to reach
            out. I'm always open to new opportunities and collaborations.
          </p>
        </header>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className={`p-8 sm:p-12 rounded-3xl backdrop-blur-sm transition-all duration-300 ${
            darkMode
              ? "bg-gray-800/40 border border-gray-700"
              : "bg-white border border-gray-200 shadow-2xl"
          }`}
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className={`text-sm font-semibold ml-1 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="John"
                  className={`w-full px-5 py-4 rounded-2xl outline-none transition-all duration-300 border ${
                    darkMode
                      ? "bg-gray-900/50 border-gray-700 text-white focus:border-indigo-500/50"
                      : "bg-gray-50 border-gray-200 text-gray-900 focus:border-indigo-400 focus:bg-white"
                  }`}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className={`text-sm font-semibold ml-1 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Doe"
                  className={`w-full px-5 py-4 rounded-2xl outline-none transition-all duration-300 border ${
                    darkMode
                      ? "bg-gray-900/50 border-gray-700 text-white focus:border-indigo-500/50"
                      : "bg-gray-50 border-gray-200 text-gray-900 focus:border-indigo-400 focus:bg-white"
                  }`}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className={`text-sm font-semibold ml-1 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                className={`w-full px-5 py-4 rounded-2xl outline-none transition-all duration-300 border ${
                  darkMode
                    ? "bg-gray-900/50 border-gray-700 text-white focus:border-orange-500/50"
                    : "bg-gray-50 border-gray-200 text-gray-900 focus:border-orange-400 focus:bg-white"
                }`}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className={`text-sm font-semibold ml-1 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="How can I help you?"
                className={`w-full px-5 py-4 rounded-2xl outline-none transition-all duration-300 border resize-none ${
                  darkMode
                    ? "bg-gray-900/50 border-gray-700 text-white focus:border-orange-500/50"
                    : "bg-gray-50 border-gray-200 text-gray-900 focus:border-orange-400 focus:bg-white"
                }`}
              ></textarea>
            </div>

            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 0px 28px rgba(79, 70, 229, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-2xl bg-linear-to-r from-indigo-500 to-indigo-600 text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 transition-all duration-300"
            >
              <Mail size={20} />
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
