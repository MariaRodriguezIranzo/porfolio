"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa"; // Usando react-icons para iconos

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-col md:flex-row justify-center md:justify-between items-center md:items-center">
          {/* Sección de Información */}
          <div className="text-center sm:text-center mb-6 sm:mb-0">
            <h2 className="text-2xl font-bold text-teal-400">María Rodríguez Iranzo</h2>
            <p className="text-gray-400 mt-2">© {currentYear} María. All Rights Reserved.</p>
          </div>

          {/* Enlaces de navegación */}
          <div className="text-center sm:text-center mb-6 sm:mb-0">
            <ul className="mt-4 space-y-4 sm:space-y-2 flex flex-col sm:flex-row sm:space-x-6 sm:space-y-0 justify-center">
              <li>
                <a href="#home" className="text-gray-400 hover:text-teal-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-teal-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-teal-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-teal-400 transition">
                  Contact
                </a>
              </li>
            </ul>
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
              href="https://www.linkedin.com/in/maríarodrígueziranzo"
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