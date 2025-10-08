'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiD3Dotjs, SiFirebase, SiGraphql } from 'react-icons/si';
import { FiArrowUpRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/components/language-provider';

export default function Projects() {
  const [inView, setInView] = useState(false);
  const { language } = useLanguage();

  const translations = {
    en: {
      sectionTitle: "Selected Work",
      projects: [
        { title: "E-commerce Platform", description: "Modern shopping experience with Next.js and TypeScript" },
        { title: "Analytics Dashboard", description: "Real-time data visualization platform" },
        { title: "Mobile Application", description: "Cross-platform mobile app for health tracking" },
      ],
    },
    es: {
      sectionTitle: "Proyectos Destacados",
      projects: [
        { title: "Plataforma de E-commerce", description: "Experiencia de compra moderna con Next.js y TypeScript" },
        { title: "Dashboard Analítico", description: "Plataforma de visualización de datos en tiempo real" },
        { title: "Aplicación Móvil", description: "App móvil multiplataforma para seguimiento de salud" },
      ],
    },
  };

  const t = translations[language];

  const projectsData = [
    {
      image: '/images/proyecto1.png',
      technologies: [
        { name: 'React', icon: <FaReact color="#61DAFB" /> },
        { name: 'Next.js', icon: <SiNextdotjs color="#000000" /> },
        { name: 'Tailwind', icon: <SiTailwindcss color="#06B6D4" /> },
      ],
      github: 'https://github.com/user/ecommerce',
    },
    {
      image: '/images/proyecto1.png',
      technologies: [
        { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
        { name: 'D3.js', icon: <SiD3Dotjs color="#F9A03C" /> },
        { name: 'Node.js', icon: <FaNodeJs color="#83CD29" /> },
      ],
      github: 'https://github.com/user/analytics-dashboard',
    },
    {
      image: '/images/proyecto1.png',
      technologies: [
        { name: 'React Native', icon: <FaReact color="#61DAFB" /> },
        { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
        { name: 'GraphQL', icon: <SiGraphql color="#E10098" /> },
      ],
      github: 'https://github.com/user/mobile-app',
    },
  ];

  // Detecta cuando el contenido entra en la vista
  const handleScroll = () => {
    const section = document.getElementById("projects");
    const rect = section?.getBoundingClientRect();
    if (rect && rect.top < window.innerHeight * 0.8) setInView(true);
    else setInView(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">{t.sectionTitle}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-3xl shadow-xl overflow-hidden cursor-pointer border border-gray-700 hover:border-teal-500 transition-all duration-300"
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={t.projects[index].title}
                  fill
                  className="object-cover rounded-t-3xl"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-teal-400">{t.projects[index].title}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-teal-400 transition"
                  >
                    <FiArrowUpRight size={20} />
                  </a>
                </div>
                <p className="text-gray-300 mb-4">{t.projects[index].description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-full text-sm text-white hover:bg-teal-600 transition-colors"
                    >
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}