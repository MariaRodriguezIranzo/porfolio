'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiD3Dotjs, SiFirebase, SiGraphql } from 'react-icons/si';
import { FiArrowUpRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Modern shopping experience with Next.js and TypeScript',
    image: '/images/proyecto1.png',
    technologies: [
      { name: 'React', icon: <FaReact color="#61DAFB" /> },
      { name: 'Next.js', icon: <SiNextdotjs color="#000000" /> },
      { name: 'Tailwind', icon: <SiTailwindcss color="#06B6D4" /> },
    ],
    github: 'https://github.com/user/ecommerce',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization platform',
    image: '/images/proyecto1.png',
    technologies: [
      { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
      { name: 'D3.js', icon: <SiD3Dotjs color="#F9A03C" /> },
      { name: 'Node.js', icon: <FaNodeJs color="#83CD29" /> },
    ],
    github: 'https://github.com/user/analytics-dashboard',
  },
  {
    title: 'Mobile Application',
    description: 'Cross-platform mobile app for health tracking',
    image: '/images/proyecto1.png',
    technologies: [
      { name: 'React Native', icon: <FaReact color="#61DAFB" /> },
      { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
      { name: 'GraphQL', icon: <SiGraphql color="#E10098" /> },
    ],
    github: 'https://github.com/user/mobile-app',
  },
];

export default function Projects() {
  const [inView, setInView] = useState(false);

  // Detecta cuando el contenido entra en la vista
  const handleScroll = () => {
    const section = document.getElementById("projects");
    const rect = section?.getBoundingClientRect();

    if (rect && rect.top < window.innerHeight * 0.8) {
      setInView(true);
    } else {
      setInView(false);
    }
  };

  useEffect(() => {
    // Añadir el listener al evento de scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center md:bottom-12 mb-8">Selected Work</h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl text-teal-500 font-semibold">{project.title}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <FiArrowUpRight size={20} />
                  </a>
                </div>
                <p className="text-white mb-4 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="flex items-center gap-1 bg-gray-700 px-3 py-1 rounded-full text-sm text-white">
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