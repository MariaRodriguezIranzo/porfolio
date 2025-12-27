"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaAngular,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaFigma,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider"; // 👈 Importa el hook

export default function About() {
  const [inView, setInView] = useState(false);
  const { language } = useLanguage();

  // Traducciones
  const translations = {
    es: {
      title: "Sobre mí",
      introTitle: "Mi introducción",
      description:
        "Soy una desarrolladora full stack recién graduada con experiencia tanto en back-end como en front-end. Aunque me apasiona especialmente el diseño y el desarrollo front-end, tengo habilidades en ambas áreas. Durante mis tres años de formación, he adquirido experiencia autodidacta en diversas tecnologías.",
      skillsTitle: "HABILIDADES",
    },
    en: {
      title: "About Me",
      introTitle: "My introduction",
      description:
        "I'm a recently graduated full stack developer with experience in both back-end and front-end work. While I'm particularly passionate about design and front-end development, I'm proficient in both areas. Throughout my three years of training, I've gained self-taught experience in various technologies.",
      skillsTitle: "SKILLS",
    },
  };

  const t = translations[language];

  // Detecta cuando el contenido entra en la vista
  const handleScroll = () => {
    const section = document.getElementById("about");
    const rect = section?.getBoundingClientRect();

    if (rect && rect.top < window.innerHeight * 0.8) {
      setInView(true);
    } else {
      setInView(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">{t.title}</h2>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Columna Izquierda */}
        <motion.div
          className="about-info w-full md:w-[56%] text-foreground dark:text-foreground text-left md:pl-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <motion.h3
            className="text-xl font-semibold text-teal-500"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -30 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          >
            {t.introTitle}
          </motion.h3>
          <motion.p
            className="mt-4 text-lg text-foreground dark:text-foreground"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -30 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            {t.description}
          </motion.p>
        </motion.div>

        {/* Columna Derecha - Tecnologías */}
        <motion.div
          className="skills w-full md:w-1/2 bg-white dark:bg-gray-800 shadow-xl p-6 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <motion.h3
            className="text-xl font-semibold text-teal-600 dark:text-teal-400 text-center mb-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 30 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          >
            {t.skillsTitle}
          </motion.h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mt-4">
            {[
              { icon: <FaHtml5 className="text-4xl text-orange-500 mx-auto" />, name: "HTML" },
              { icon: <FaCss3Alt className="text-4xl text-blue-500 mx-auto" />, name: "CSS" },
              { icon: <FaJs className="text-4xl text-yellow-500 mx-auto" />, name: "JavaScript" },
              { icon: <FaReact className="text-4xl text-blue-400 mx-auto" />, name: "React" },
              { icon: <FaBootstrap className="text-4xl text-purple-600 mx-auto" />, name: "Bootstrap" },
              { icon: <FaAngular className="text-4xl text-red-600 mx-auto" />, name: "Angular" },
              { icon: <FaNodeJs className="text-4xl text-green-500 mx-auto" />, name: "Node.js" },
              { icon: <FaPhp className="text-4xl text-purple-600 mx-auto" />, name: "PHP" },
              { icon: <FaPython className="text-4xl text-yellow-400 mx-auto" />, name: "Python" },
              { icon: <FaFigma className="text-4xl text-blue-500 mx-auto" />, name: "Figma" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="skills-box text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                transition={{ duration: 1.5, delay: 1.5 + index * 0.2 }}
              >
                {tech.icon}
                <span className="block mt-2 text-gray-800 dark:text-white">{tech.name}</span>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
