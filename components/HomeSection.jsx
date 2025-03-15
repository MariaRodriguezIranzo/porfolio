"use client";

import { Link } from "react-scroll"; // Asegúrate de importar correctamente desde react-scroll
import { TypeAnimation } from 'react-type-animation';
import { ArrowDownCircle } from "lucide-react"; // Icono de flecha hacia abajo

export default function HomeSection() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center py-20 px-4 min-h-screen"
    >
      {/* Contenedor de texto */}
      <div className="flex flex-col items-center md:items-start md:w-1/2 space-y-6">
        {/* Nombre en estilo de botón */}
        <div className="featured-text-card mb-4">
          <span className="text-sm font-semibold bg-blue-100 dark:bg-gray-700 px-4 py-2 rounded-full inline-block cursor-pointer hover:bg-blue-200 dark:hover:bg-gray-600">
            María Rodríguez Iranzo
          </span>
        </div>

        <div className="featured-text-card space-y-4">
          <h1 className="featured-name text-5xl font-semibold text-teal-600 dark:text-teal-400">
            I'm{" "}
            <span className="typed-text text-xl">
              <TypeAnimation
                sequence={[
                  'Designer', // Primer texto
                  2000, // Tiempo de espera antes de cambiar
                  'Developer', // Segundo texto
                  2000, // Tiempo de espera antes de cambiar
                ]}
                wrapper="span"
                speed={50} // Velocidad de escritura
                repeat={Infinity} // Repite el ciclo infinitamente
              />
            </span>
          </h1>

          {/* Descripción de la persona */}
          <p className="featured-text-info text-lg mt-6">
            Full Stack graduate passionate about front-end and design, actively seeking new projects and opportunities to grow as a developer.
          </p>

          <button className="featured-text-btn px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 mt-6">
            Let's Work Together
          </button>
        </div>
      </div>

      {/* Imagen a la derecha */}
      <div className="featured-image md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
        <img
          src="/images/proyecto2.png" // Ruta correcta de la imagen
          alt="Featured"
          className="rounded-xl shadow-lg max-w-full h-auto object-contain w-3/4 md:w-1/2"
        />
      </div>
    

      {/* Scroll Down Button (más arriba y con icono de flecha hacia abajo) */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center">
        <Link
          to="about" // La sección a la que se desplazará
          smooth={true} // Esto es para un desplazamiento suave
          offset={-50} // Ajuste para que no se superponga al navbar
          className="text-teal-600 dark:text-teal-400 text-xl flex items-center space-x-2 hover:underline"
        >
          <span>Scroll Down</span>
          <ArrowDownCircle size={24} />
        </Link>
      </div>
    </section>
  );
}
