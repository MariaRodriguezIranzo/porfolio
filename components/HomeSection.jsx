'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomeSection() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center">
      <motion.h1 
        className="text-5xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ¡Hola! Soy <span className="text-blue-600">[Tu Nombre]</span>
      </motion.h1>
      <p className="text-gray-600 mt-4 max-w-xl">
        Desarrollador Web especializado en [Tecnologías]. Construyo aplicaciones elegantes y eficientes.
      </p>
      <Link href="#projects" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Ver Proyectos
      </Link>
    </section>
  );

}
