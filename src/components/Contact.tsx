import type { FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Section, SectionContainer } from "./layout/SectionContainer";

const Contact = ({ darkMode }: { darkMode: boolean }) => {
  const emailAddress = "zubairafridi2312@gmail.com";

  const socialLinks = [
    {
      name: "Email",
      value: emailAddress,
      icon: Mail,
      link: `mailto:${emailAddress}`,
      external: false,
    },
    {
      name: "LinkedIn",
      value: "LinkedIn",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/zubair-khan-web-developer",
      external: true,
    },
    {
      name: "GitHub",
      value: "GitHub",
      icon: FaGithub,
      link: "https://github.com/zubi-afridi",
      external: true,
    },
  ];

  const theme = {
    headingGradient: darkMode
      ? "from-indigo-400 to-blue-500"
      : "from-indigo-600 to-blue-600",
    textPrimary: darkMode ? "text-white" : "text-slate-900",
    textSecondary: darkMode ? "text-slate-400" : "text-slate-600",
    input: darkMode
      ? "bg-slate-950/30 border-white/10 text-white placeholder:text-slate-500 focus:border-indigo-400/70 focus:bg-slate-950/55"
      : "bg-white/80 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white shadow-sm",
    inputShadow: darkMode
      ? "shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
      : "shadow-[0_12px_35px_rgba(15,23,42,0.06)]",
    card: darkMode
      ? "bg-slate-900/65 border-indigo-300/10 shadow-[0_24px_90px_rgba(2,6,23,0.38),inset_0_1px_0_rgba(255,255,255,0.04)]"
      : "bg-white/85 border-slate-200 shadow-[0_24px_70px_rgba(79,70,229,0.14)]",
    iconBox: darkMode
      ? "bg-indigo-500/15 border-indigo-400/60 text-indigo-300"
      : "bg-indigo-50 border-indigo-200 text-indigo-600",
    divider: darkMode ? "bg-white/10" : "bg-slate-200",
    channelText: darkMode
      ? "text-slate-200 hover:text-white"
      : "text-slate-700 hover:text-indigo-700",
    accent: darkMode ? "text-indigo-300" : "text-indigo-600",
    button: darkMode
      ? "from-indigo-500 via-indigo-600 to-blue-700 shadow-indigo-500/25"
      : "from-indigo-600 to-blue-600 shadow-indigo-500/20",
  };

  const fieldClass = `w-full rounded-[1.1rem] border px-5 py-3.5 text-sm sm:text-base font-medium outline-none transition-all duration-300 ${theme.input} ${theme.inputShadow}`;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const subject = formData.get("subject")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    const metaLines = [
      name ? `Name: ${name}` : "",
      email ? `Email: ${email}` : "",
      subject ? `Subject: ${subject}` : "",
    ].filter(Boolean);

    const body = `${metaLines.join("\n")}${message ? `\n\n${message}` : ""}`;
    const mailSubject = subject || "Portfolio contact";

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
      mailSubject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Section id="contact" className="transition-colors duration-300">
      <SectionContainer>
        <div>
          <header className="text-center mb-16" data-aos="fade-up">
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold pb-2 mb-2 bg-linear-to-r ${theme.headingGradient} bg-clip-text text-transparent`}
            >
              Get In Touch
            </h2>
            <div
              className={`h-1.5 w-24 mx-auto rounded-full bg-linear-to-r from-indigo-500 to-blue-500 mb-8`}
            ></div>
            <p
              className={`max-w-2xl mx-auto text-base sm:text-lg ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Have a project in mind or just want to say hi? Feel free to reach
              out. I'm always open to new opportunities and collaborations.
            </p>
          </header>

          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.75fr)] lg:gap-12">
            {/* Contact Form */}
            <motion.form
              data-aos="fade-right"
              data-aos-delay="200"
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 sm:gap-6"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  aria-label="Name"
                  className={fieldClass}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  aria-label="Email"
                  className={fieldClass}
                />
              </div>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                aria-label="Subject"
                className={fieldClass}
              />

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Message"
                aria-label="Message"
                className={`${fieldClass} min-h-[180px] resize-none sm:min-h-[200px]`}
              ></textarea>

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.015,
                  boxShadow: "0px 0px 30px rgba(79, 70, 229, 0.42)",
                }}
                whileTap={{ scale: 0.98 }}
                className={`flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-linear-to-r ${theme.button} px-6 py-3.5 text-base font-bold text-white shadow-xl transition-all duration-300 sm:py-4`}
              >
                Send message
                <Send size={18} strokeWidth={2.4} />
              </motion.button>
            </motion.form>

            {/* Direct Channels Card */}
            <motion.aside
              data-aos="fade-left"
              data-aos-delay="400"
              className={`flex h-full flex-col justify-center rounded-[1.5rem] border px-6 py-8 text-center backdrop-blur-xl transition-all duration-300 sm:p-10 ${theme.card}`}
            >
              <div
                className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-[1rem] border ${theme.iconBox}`}
              >
                <Mail size={28} strokeWidth={2.2} />
              </div>

              <h3
                className={`mb-2 text-xl font-semibold sm:text-2xl ${theme.textPrimary}`}
              >
                Direct channels
              </h3>
              <p
                className={`mx-auto max-w-xs text-sm font-medium sm:text-base ${theme.textSecondary}`}
              >
                Prefer email or socials? Reach out anytime.
              </p>

              <div className={`my-8 h-px w-full ${theme.divider}`}></div>

              <div className="w-full space-y-4 text-left">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target={social.external ? "_blank" : undefined}
                      rel={social.external ? "noopener noreferrer" : undefined}
                      whileHover={{ x: 6 }}
                      className={`group flex w-full items-center gap-5 rounded-2xl px-1 py-1.5 transition-colors duration-300 ${theme.channelText}`}
                    >
                      <Icon
                        className={`h-6 w-6 shrink-0 transition-transform duration-300 group-hover:scale-110 ${theme.accent}`}
                      />
                      <span className="min-w-0 break-words text-base font-normal sm:text-lg">
                        {social.value}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.aside>
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
};

export default Contact;
