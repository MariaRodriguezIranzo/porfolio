'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; // Importa EmailJS

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false); // Para manejar el estado de carga
  const [showModal, setShowModal] = useState(false); // Estado para el modal
  const [status, setStatus] = useState(''); // Estado para el mensaje de estado

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de campos requeridos
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('All fields are required!');
      return;
    }

    // Validación de email
    if (!validateEmail(formData.email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    setLoading(true); // Inicia el estado de carga

    // Configura los parámetros de EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    // Enviar el correo a través de EmailJS
    try {
      const response = await emailjs.send(
        'service_ek3n6sv', // Service ID
        'template_3swn4ih', // Template ID
        templateParams,
        'ilzl6g2Cg78AS3hRN' // User ID (Public Key)
      );
      console.log('Email sent successfully:', response);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setShowModal(true); // Muestra el modal
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Failed to send message. Please try again later.');
    } finally {
      setLoading(false); // Finaliza el estado de carga
    }
  };

  // Cerrar el modal automáticamente después de 3 segundos
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="contact" className="py-20 px-6">
      {/* Header de la sección */}
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

      {/* Contenedor con dos columnas */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Columna izquierda - Descripción */}
        <motion.div
          className="w-full md:w-[48%] text-left"
          initial={{ opacity: 0, y: 30 }}  // Agregar desplazamiento en Y
          whileInView={{ opacity: 1, y: 0 }} // La animación se dispara cuando entra en vista
          transition={{
            duration: 1.5,   // Duración de la animación
            ease: "easeOut", // Transición suave
          }}
        >
          <h3 className="text-xl font-semibold text-teal-500">Get In Touch</h3>
          <p className="mt-4 text-lg">
            I'm always open to new opportunities. Whether you want to collaborate on a project, ask a question, or discuss an idea, feel free to reach out!
          </p>

          {/* Imagen a la derecha (centrada arriba) */}
          <motion.div
            className="featured-image md:w-1/2 mt-3 md:mt-0 flex justify-center md:justify-end py-20 px-6"
            initial={{ opacity: 0, x: 30 }}  // Inicializa la imagen con opacidad 0 y desplazada
            animate={{ opacity: 1, x: 0 }}    // La imagen aparece con opacidad 1 y se mueve a la posición inicial
            transition={{ duration: 1, delay: 0.3 }} // Añadimos un pequeño retraso para que se anime después del texto
          >
            <img
              src="/images/logo2.png"
              alt="Featured"
              className="rounded-full shadow-lg max-w-full h-auto object-cover w-50 h-50"  // Cambiado para ser redonda
            />
          </motion.div>
        </motion.div>

        {/* Columna derecha - Formulario */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full md:w-[56%] bg-gray-700 p-8 rounded-lg shadow-xl"
          initial={{ opacity: 0, x: 30 }}  // Desplazamiento desde la derecha
          whileInView={{ opacity: 1, x: 0 }}   // Vuelve al lugar original al entrar en vista
          transition={{
            duration: 1.5,   // Duración de la animación
            ease: "easeOut", // Transición más suave
            delay: 0.2,    // Algo de retraso para la animación del formulario
          }}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 mb-4 rounded-lg bg-gray-600 text-white border-none focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-300"
            value={formData.name}
            onChange={handleChange}
            whileInView={{ opacity: 1, scale: 1 }} // Se anima cuando entra en vista
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-4 mb-4 rounded-lg bg-gray-600 text-white border-none focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-300"
            value={formData.email}
            onChange={handleChange}
            whileInView={{ opacity: 1, scale: 1 }} // Se anima cuando entra en vista
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full p-4 mb-6 rounded-lg bg-gray-600 text-white border-none focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-300"
            value={formData.message}
            onChange={handleChange}
            whileInView={{ opacity: 1, scale: 1 }} // Se anima cuando entra en vista
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition-all"
            disabled={loading} // Deshabilita el botón durante la carga
            whileHover={{ scale: 1.05 }} // Agranda el botón al pasar el cursor
            transition={{ duration: 0.2 }}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>

      {/* Modal de éxito */}
      {showModal && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0, scale: 0.8 }}  // Inicialmente el modal es invisible y más pequeño
          animate={{ opacity: 1, scale: 1 }}   // Modal visible y tamaño normal
          exit={{ opacity: 0, scale: 0.8 }}    // Cuando se cierre, el modal se hace pequeño y desaparece
          transition={{ duration: 0.5 }} // Duración de la animación
        >
          <motion.div
            className="bg-gray-700 p-10 rounded-lg text-center text-white max-w-md mx-auto"
            initial={{ scale: 0.9 }} // Modal más pequeño al inicio
            animate={{ scale: 1 }}   // Modal vuelve a su tamaño normal
            exit={{ scale: 0.9 }}    // Modal se hace pequeño al salir
            transition={{ duration: 0.3 }} // Duración de la animación
          >
            <h3 className="text-2xl font-semibold mb-4">Message Sent!</h3>
            <p className="text-lg mb-6">Thank you for reaching out. I will get back to you shortly.</p>
            <motion.button
              onClick={closeModal}
              className="py-2 px-6 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-all"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
