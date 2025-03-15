'use client';

import ProjectCard from './ProjectCard';

const projects = [
  {
    name: 'Proyecto 1',
    description: 'Una app increíble para gestionar tareas.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    logo: '/images/proyecto1.png',
    github: 'https://github.com/tuusuario/proyecto1',
  },
  {
    name: 'Proyecto 2',
    description: 'Dashboard interactivo para datos.',
    tech: ['Vue', 'Django', 'PostgreSQL'],
    logo: '/images/proyecto2.png',
    github: 'https://github.com/tuusuario/proyecto2',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold">Mis Proyectos</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
