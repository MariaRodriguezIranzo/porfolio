"use client";

import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { ArrowDownCircle, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export default function HomeSection() {
  const { language } = useLanguage();

  const translations = {
    es: {
      name: "María Rodríguez Iranzo",
      titleIntro: "👋 Soy ",
      roles: ["Diseñadora", "Programadora"],
      description:
        "Desarrolladora Full Stack apasionada por el front-end y el diseño, en búsqueda activa de nuevos proyectos y oportunidades para crecer como profesional.",
      hireMe: "Contrátame",
      downloadCV: "Descargar CV",
      scrollDown: "Desplázate hacia abajo",
    },
    en: {
      name: "María Rodríguez Iranzo",
      titleIntro: "👋 I'm ",
      roles: ["Designer", "Developer"],
      description:
        "Full Stack graduate passionate about front-end and design, actively seeking new projects and opportunities to grow as a developer.",
      hireMe: "Hire Me",
      downloadCV: "Download CV",
      scrollDown: "Scroll Down",
    },
  };

  const t = translations[language];

  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-center py-20 px-4 min-h-screen relative"
    >
      {/* Texto */}
      <motion.div
        className="flex flex-col items-center md:items-start md:w-1/2 space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="featured-text-card mb-4 w-full">

          <span className="text-sm font-semibold bg-blue-100 dark:bg-gray-700 px-4 py-2 rounded-md inline-block cursor-pointer hover:bg-blue-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white mt-6 sm:mt-0">
            {t.name}
          </span>
        </div>

        <div className="featured-text-card space-y-4">
          <h1 className="featured-name text-5xl font-semibold text-teal-600 dark:text-teal-400 text-center md:text-left">
            {t.titleIntro}
            <span className="typed-text text-xl text-foreground">
              <TypeAnimation
                key={language} // 🔑 Reinicia la animación al cambiar de idioma
                sequence={t.roles.map(role => [role, 2000]).flat()} // Pausa 2s por rol
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-foreground"
              />
            </span>
          </h1>

          <p className="featured-text-info text-lg text-foreground mt-6 text-center md:text-left">
            {t.description}
          </p>

          {/* Botones */}
          <div className="flex flex-col md:flex-row gap-4 mt-6 space-x-0 md:space-x-4 w-full">
            <div className="flex flex-row space-x-4 w-full sm:w-auto">
              <Link
                to="contact"
                smooth={true}
                offset={-50}
                className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition cursor-pointer text-center w-full sm:w-auto"
              >
                {t.hireMe}
              </Link>
              <a
                href="/cv.pdf"
                download
                className="px-6 py-3 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition text-center w-full sm:w-auto"
              >
                {t.downloadCV}
              </a>
            </div>
          </div>
          {/* Redes sociales */}
          <div className="flex gap-6 mt-6 justify-center md:justify-start">
            <a
              href="https://github.com/MariaRodriguezIranzo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mariarodrigueziranzo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </motion.div>
      {/* Imagen */}
      <motion.div
        className="featured-image md:w-1/2 mt-3 md:mt-0 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img
          src="/images/me.jpg"
          alt="María Rodríguez Iranzo"
          className="shadow-lg max-w-full h-auto object-cover w-50 h-50 imgAboutMe"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-5 sm:bottom-20 md:bottom-12 left-0 right-0 flex justify-center hidden md:flex"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Link
          to="about"
          smooth={true}
          offset={-100}
          className="px-8 py-3 flex items-center gap-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition cursor-pointer"
        >
          {t.scrollDown} <ArrowDownCircle size={20} />
        </Link>
      </motion.div>

    </section>
  );
}
