'use client';

import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaAngular, FaNodeJs, FaPhp, FaPython, FaFigma } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="">
      {/* Header de la sección */}
        <h2 className="text-3xl font-bold text-center md:bottom-12 mb-8">Sobre Mí</h2>
    

      {/* Contenedor con dos columnas */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        
        {/* Columna Izquierda - About (Más pegado a la izquierda) */}
        <motion.div
          className="about-info w-full md:w-[56%] text-foreground dark:text-foreground text-left md:pl-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-foreground">Mi Introducción</h3>
          <p className="mt-4 text-lg text-foreground dark:text-foreground">
            Soy un desarrollador full-stack graduado recientemente, con experiencia en el desarrollo
            tanto de back-end como de front-end. Me apasiona especialmente el diseño y el desarrollo
            front-end, aunque tengo habilidades en ambas áreas. A lo largo de mis tres años de
            formación, he adquirido experiencia autodidacta en diversas tecnologías.
          </p>
        </motion.div>

        {/* Columna Derecha - Tecnologías */}
        <motion.div
          className="skills w-full md:w-1/2 bg-white dark:bg-gray-800 shadow-xl p-6 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 text-center mb-2">Tecnologías</h3>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mt-4 text-teal-600 dark:text-teal-400">
            <div className="skills-box text-center">
              <FaHtml5 className="text-4xl text-orange-500 mx-auto" />
              <span className="block mt-2">HTML</span>
            </div>
            <div className="skills-box text-center">
              <FaCss3Alt className="text-4xl text-blue-500 mx-auto" />
              <span className="block mt-2">CSS</span>
            </div>
            <div className="skills-box text-center">
              <FaJs className="text-4xl text-yellow-500 mx-auto" />
              <span className="block mt-2">JavaScript</span>
            </div>
            <div className="skills-box text-center">
              <FaReact className="text-4xl text-blue-400 mx-auto" />
              <span className="block mt-2">React</span>
            </div>
            <div className="skills-box text-center">
              <FaBootstrap className="text-4xl text-purple-600 mx-auto" />
              <span className="block mt-2">Bootstrap</span>
            </div>
            <div className="skills-box text-center">
              <FaAngular className="text-4xl text-red-600 mx-auto" />
              <span className="block mt-2">Angular</span>
            </div>
            <div className="skills-box text-center">
              <FaNodeJs className="text-4xl text-green-500 mx-auto" />
              <span className="block mt-2">Node.js</span>
            </div>
            <div className="skills-box text-center">
              <FaPhp className="text-4xl text-purple-600 mx-auto" />
              <span className="block mt-2">PHP</span>
            </div>
            <div className="skills-box text-center">
              <FaPython className="text-4xl text-yellow-400 mx-auto" />
              <span className="block mt-2">Python</span>
            </div>
            <div className="skills-box text-center">
              <FaFigma className="text-4xl text-blue-500 mx-auto" />
              <span className="block mt-2">Figma</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
