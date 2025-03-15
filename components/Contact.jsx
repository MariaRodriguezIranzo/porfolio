'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold">Contacto</h2>
      <p className="text-gray-600 mt-4">Si estás interesado en colaborar, envíame un mensaje.</p>
      <form className="mt-6 flex flex-col items-center">
        <input type="text" placeholder="Tu nombre" className="w-full md:w-2/3 p-3 border rounded-md mb-3" />
        <input type="email" placeholder="Tu email" className="w-full md:w-2/3 p-3 border rounded-md mb-3" />
        <textarea placeholder="Tu mensaje" className="w-full md:w-2/3 p-3 border rounded-md mb-3 h-32"></textarea>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Enviar</button>
      </form>
    </section>
  );
}
