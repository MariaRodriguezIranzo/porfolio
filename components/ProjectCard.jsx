import Image from 'next/image';
import { Github } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
      <Image src={project.logo} width={80} height={80} alt={project.name} className="rounded-lg" />
      <h3 className="text-xl font-semibold mt-4">{project.name}</h3>
      <p className="text-gray-600 text-center">{project.description}</p>
      <div className="flex space-x-2 mt-2">
        {project.tech.map((tech, i) => (
          <span key={i} className="px-2 py-1 text-sm bg-gray-200 rounded-md">{tech}</span>
        ))}
      </div>
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-4 text-gray-700 hover:text-black">
        <Github size={28} />
      </a>
    </div>
  );
}
