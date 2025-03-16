"use client";

import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { ArrowDownCircle, Github, Linkedin } from "lucide-react";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-center py-20 px-4 min-h-screen"
    >
      {/* Contenedor de texto */}
      <div className="flex flex-col items-center md:items-start md:w-1/2 space-y-6">
        {/* Nombre en estilo de botón alineado a la izquierda */}
        <div className="featured-text-card mb-4 w-full">
          {/* Agregado margen superior en móvil para dar espacio */}
          <span className="text-sm font-semibold bg-blue-100 dark:bg-gray-700 px-4 py-2 rounded-md inline-block cursor-pointer hover:bg-blue-200 dark:hover:bg-gray-600 btn-foreground mt-6 sm:mt-0">
            María Rodríguez Iranzo
          </span>
        </div>

        <div className="featured-text-card space-y-4">
          <h1 className="featured-name text-5xl font-semibold text-teal-600 dark:text-teal-400">
            👋 I'm{" "}
            <span className="typed-text text-xl text-foreground">
              <TypeAnimation
                sequence={["Designer", 2000, "Developer", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-foreground"
              />
            </span>
          </h1>

          {/* Descripción de la persona */}
          <p className="featured-text-info text-lg text-foreground mt-6 text-center md:text-left">
            Full Stack graduate passionate about front-end and design, actively seeking new projects and opportunities to grow as a developer.
          </p>

          {/* Botones principales */}
          <div className="flex flex-col md:flex-row gap-4 mt-6 space-x-0 md:space-x-4">
            {/* En móvil, los botones estarán en la misma línea */}
            <div className="flex flex-row space-x-4 w-full sm:w-auto">
              <Link
                to="contact"
                smooth={true}
                offset={-50}
                className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition cursor-pointer text-center w-full sm:w-auto"
              >
                Hire Me
              </Link>
              <a
                href="/cv.pdf"
                download
                className="px-6 py-3 bg-gray-300 dark:bg-gray-700 btn-foreground rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition text-center w-full sm:w-auto"
              >
                Download CV 📄
              </a>
            </div>
          </div>

          {/* Botones de redes sociales */}
          <div className="flex gap-6 mt-6 justify-center md:justify-start">
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-300 dark:bg-gray-700 btn-foreground rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-300 dark:bg-gray-700 btn-foreground rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Imagen a la derecha (centrada arriba) */}
      <div className="featured-image md:w-1/2 mt-3 md:mt-0 flex justify-center md:justify-end">
        <img
          src="/images/me.jpg"
          alt="Featured"
          className="rounded-xl shadow-lg max-w-full h-auto object-contain w-3/4 md:w-1/2"
        />
      </div>

      {/* Scroll Down Button desplazado más hacia abajo en dispositivos móviles */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center md:bottom-12 ">
        <Link
          to="about"
          smooth={true}
          offset={900}
          className="px-8 py-3 flex items-center gap-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition cursor-pointer"
        >
          Scroll Down <ArrowDownCircle size={20} />
        </Link>
      </div>
    </section>
  );
}
