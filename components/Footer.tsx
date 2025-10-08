"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/components/language-provider"; // 👈 Hook de idioma

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const translations = {
    en: {
      rights: "All Rights Reserved",
    },
    es: {
      rights: "Todos los derechos reservados",
    },
  };

  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-col md:flex-row justify-center md:justify-between items-center md:items-center">
          {/* Información */}
          <div className="text-center sm:text-center mb-6 sm:mb-0">
            <h2 className="text-2xl font-bold text-teal-400">María Rodríguez Iranzo</h2>
            <p className="text-gray-400 mt-2">© {currentYear} María. {t.rights}.</p>
          </div>

          {/* Redes sociales */}
          <div className="text-center sm:text-center flex justify-center sm:justify-start space-x-6 mt-6 sm:mt-0">
            <a
              href="https://github.com/MariaRodriguezIranzo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mariarodrigueziranzo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
