import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { AOS_DELAY_STEP, AOS_DURATION } from "../lib/animation";
import { Section, SectionContainer } from "./layout/SectionContainer";

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type SubmissionStatus = "idle" | "success" | "error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const contactEmailAddress = "zubairafridi2312@gmail.com";
const formSubmitEndpoint = `https://formsubmit.co/ajax/${contactEmailAddress}`;

const Contact = ({ darkMode }: { darkMode: boolean }) => {
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ContactFormValues>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const socialLinks = [
    {
      name: "Email",
      value: contactEmailAddress,
      icon: Mail,
      link: `mailto:${contactEmailAddress}`,
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
    errorText: darkMode ? "text-rose-300" : "text-rose-600",
    errorInput: darkMode
      ? "border-rose-400/70 focus:border-rose-300"
      : "border-rose-400 focus:border-rose-500",
    successMessage: darkMode
      ? "border-emerald-400/25 bg-emerald-500/10 text-emerald-200"
      : "border-emerald-200 bg-emerald-50 text-emerald-700",
    errorMessage: darkMode
      ? "border-rose-400/25 bg-rose-500/10 text-rose-200"
      : "border-rose-200 bg-rose-50 text-rose-700",
  };

  const fieldClass = `w-full rounded-[1.1rem] border px-5 py-3.5 text-sm sm:text-base font-medium outline-none transition-all duration-200 ${theme.input} ${theme.inputShadow}`;

  const getFieldClass = (hasError: boolean) =>
    `${fieldClass} ${hasError ? theme.errorInput : ""}`;

  const onSubmit: SubmitHandler<ContactFormValues> = async (values) => {
    setSubmissionStatus("idle");

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
      _subject: `Portfolio contact: ${values.subject.trim()}`,
      _template: "table",
      _captcha: "false",
    };

    try {
      const response = await fetch(formSubmitEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Unable to send contact message.");
      }

      reset();
      setSubmissionStatus("success");
    } catch {
      setSubmissionStatus("error");
    }
  };

  const handleFormChange = () => {
    if (submissionStatus !== "idle") {
      setSubmissionStatus("idle");
    }
  };

  const isSubmitDisabled = isSubmitting || !isValid;

  return (
    <Section id="contact" className="transition-colors duration-200">
      <SectionContainer>
        <div>
          <header
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-duration={AOS_DURATION}
          >
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
              data-aos-delay={AOS_DELAY_STEP}
              data-aos-duration={AOS_DURATION}
              onSubmit={handleSubmit(onSubmit)}
              onChange={handleFormChange}
              noValidate
              className="flex flex-col gap-5 sm:gap-6"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    aria-label="Name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={getFieldClass(Boolean(errors.name))}
                    {...register("name", {
                      validate: (value) => {
                        const trimmedValue = value.trim();

                        if (!trimmedValue) {
                          return "Name is required.";
                        }

                        return (
                          trimmedValue.length >= 2 ||
                          "Please enter at least 2 characters."
                        );
                      },
                    })}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className={`mt-2 px-1 text-xs font-semibold sm:text-sm ${theme.errorText}`}
                    >
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    aria-label="Email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={getFieldClass(Boolean(errors.email))}
                    {...register("email", {
                      validate: (value) => {
                        const trimmedValue = value.trim();

                        if (!trimmedValue) {
                          return "Email is required.";
                        }

                        return (
                          emailPattern.test(trimmedValue) ||
                          "Please enter a valid email address."
                        );
                      },
                    })}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className={`mt-2 px-1 text-xs font-semibold sm:text-sm ${theme.errorText}`}
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  aria-label="Subject"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={
                    errors.subject ? "subject-error" : undefined
                  }
                  className={getFieldClass(Boolean(errors.subject))}
                  {...register("subject", {
                    validate: (value) => {
                      const trimmedValue = value.trim();

                      if (!trimmedValue) {
                        return "Subject is required.";
                      }

                      return (
                        trimmedValue.length >= 3 ||
                        "Please enter at least 3 characters."
                      );
                    },
                  })}
                />
                {errors.subject && (
                  <p
                    id="subject-error"
                    className={`mt-2 px-1 text-xs font-semibold sm:text-sm ${theme.errorText}`}
                  >
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Message"
                  aria-label="Message"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={`${getFieldClass(
                    Boolean(errors.message),
                  )} min-h-[180px] resize-none sm:min-h-[200px]`}
                  {...register("message", {
                    validate: (value) => {
                      const trimmedValue = value.trim();

                      if (!trimmedValue) {
                        return "Message is required.";
                      }

                      return (
                        trimmedValue.length >= 10 ||
                        "Please enter a message of at least 10 characters."
                      );
                    },
                  })}
                ></textarea>
                {errors.message && (
                  <p
                    id="message-error"
                    className={`mt-2 px-1 text-xs font-semibold sm:text-sm ${theme.errorText}`}
                  >
                    {errors.message.message}
                  </p>
                )}
              </div>

              {submissionStatus === "success" && (
                <p
                  role="status"
                  className={`rounded-2xl border px-5 py-4 text-sm font-semibold sm:text-base ${theme.successMessage}`}
                >
                  Your message has been sent successfully. I will respond within
                  24 hours.
                </p>
              )}

              {submissionStatus === "error" && (
                <p
                  role="alert"
                  className={`rounded-2xl border px-5 py-4 text-sm font-semibold sm:text-base ${theme.errorMessage}`}
                >
                  Something went wrong while sending your message. Please try
                  again.
                </p>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitDisabled}
                aria-disabled={isSubmitDisabled}
                whileHover={
                  isSubmitDisabled
                    ? undefined
                    : {
                        scale: 1.015,
                        boxShadow: "0px 0px 30px rgba(79, 70, 229, 0.42)",
                      }
                }
                whileTap={isSubmitDisabled ? undefined : { scale: 0.98 }}
                className={`flex w-full items-center justify-center gap-3 rounded-full bg-linear-to-r ${theme.button} px-6 py-3.5 text-base font-bold text-white shadow-xl transition-all duration-200 sm:py-4 ${
                  isSubmitDisabled
                    ? "cursor-not-allowed opacity-70"
                    : "cursor-pointer"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send message"}
                <Send size={18} strokeWidth={2.4} />
              </motion.button>
            </motion.form>

            {/* Direct Channels Card */}
            <motion.aside
              data-aos="fade-left"
              data-aos-delay={AOS_DELAY_STEP * 2}
              data-aos-duration={AOS_DURATION}
              className={`flex h-full flex-col justify-center rounded-[1.5rem] border px-6 py-8 text-center backdrop-blur-xl transition-all duration-200 sm:p-10 ${theme.card}`}
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
                      className={`group flex w-full items-center gap-5 rounded-2xl px-1 py-1.5 transition-colors duration-200 ${theme.channelText}`}
                    >
                      <Icon
                        className={`h-6 w-6 shrink-0 transition-transform duration-200 group-hover:scale-110 ${theme.accent}`}
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
