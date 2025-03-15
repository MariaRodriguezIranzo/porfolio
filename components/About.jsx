'use client';

export default function About() {
  return (
    <section id="about" className="py-12 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold">Sobre Mí</h2>
      <p className="text-gray-600 mt-4">
        Soy un desarrollador web con experiencia en tecnologías como [React, Next.js, Node.js].
        Me apasiona construir soluciones escalables y optimizadas.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {["JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS"].map((skill, index) => (
          <span key={index} className="px-3 py-1 bg-gray-200 rounded-md">{skill}</span>
        ))}
      </div>
    </section>
  );
}
