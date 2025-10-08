'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { useLanguage } from '@/components/language-provider'; // 👈 Importamos el hook

export default function Contact() {
  const { language } = useLanguage();

  // Traducciones
  const translations = {
    en: {
      title: "Contact Me",
      subtitle: "Get In Touch",
      description:
        "I'm always open to new opportunities. Whether you want to collaborate on a project, ask a question, or discuss an idea, feel free to reach out!",
      placeholders: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
      },
      button: "Send Message",
      sending: "Sending...",
      required: "All fields are required!",
      invalidEmail: "Please enter a valid email address.",
      successTitle: "Message Sent!",
      successText: "Thank you for reaching out. I will get back to you shortly.",
      close: "Close",
      fail: "Failed to send message. Please try again later.",
    },
    es: {
      title: "Contáctame",
      subtitle: "Ponte en contacto",
      description:
        "Siempre estoy abierta a nuevas oportunidades. Ya sea que quieras colaborar en un proyecto, hacer una pregunta o compartir una idea, ¡no dudes en escribirme!",
      placeholders: {
        name: "Tu Nombre",
        email: "Tu Correo Electrónico",
        message: "Tu Mensaje",
      },
      button: "Enviar Mensaje",
      sending: "Enviando...",
      required: "¡Todos los campos son obligatorios!",
      invalidEmail: "Por favor, introduce un correo válido.",
      successTitle: "¡Mensaje Enviado!",
      successText: "Gracias por contactarme. Te responderé pronto.",
      close: "Cerrar",
      fail: "No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.",
    },
  };

  const t = translations[language];

  // Estados del formulario
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus(t.required);
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus(t.invalidEmail);
      return;
    }

    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        'service_ek3n6sv', // ID del servicio
        'template_3swn4ih', // ID de la plantilla
        templateParams,
        'ilzl6g2Cg78AS3hRN' // Public key de EmailJS
      );
      console.log('Email sent successfully:', response);
      setStatus(t.success);
      setFormData({ name: '', email: '', message: '' });
      setShowModal(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus(t.fail);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => setShowModal(false);

  return (
    <section id="contact" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">{t.title}</h2>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Columna izquierda */}
        <motion.div
          className="w-full md:w-[48%] text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h3 className="text-xl font-semibold text-teal-500">{t.subtitle}</h3>
          <p className="mt-4 text-lg">{t.description}</p>

          <motion.div
            className="featured-image md:w-1/2 mt-3 md:mt-0 flex justify-center md:justify-end py-20 px-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img
              src="/images/logo2.png"
              alt="Contact"
              className="rounded-full shadow-lg max-w-full h-auto object-cover w-50 h-50"
            />
          </motion.div>
        </motion.div>

        {/* Columna derecha - Formulario */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full md:w-[56%] bg-gray-700 p-8 rounded-lg shadow-xl"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        >
          <motion.input
            type="text"
            name="name"
            placeholder={t.placeholders.name}
            className="w-full p-4 mb-4 rounded-lg bg-gray-600 text-white border-none focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-300"
            value={formData.name}
            onChange={handleChange}
          />
          <motion.input
            type="email"
            name="email"
            placeholder={t.placeholders.email}
            className="w-full p-4 mb-4 rounded-lg bg-gray-600 text-white border-none focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-300"
            value={formData.email}
            onChange={handleChange}
          />
          <motion.textarea
            name="message"
            placeholder={t.placeholders.message}
            rows="4"
            className="w-full p-4 mb-6 rounded-lg bg-gray-600 text-white border-none focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-300"
            value={formData.message}
            onChange={handleChange}
          />
          <motion.button
            type="submit"
            className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition-all"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
          >
            {loading ? t.sending : t.button}
          </motion.button>

          {/* Estado del envío */}
          {status && <p className="text-sm text-center mt-4 text-white">{status}</p>}
        </motion.form>
      </div>

      {/* Modal de éxito */}
      {showModal && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-gray-700 p-10 rounded-lg text-center text-white max-w-md mx-auto"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4">{t.successTitle}</h3>
            <p className="text-lg mb-6">{t.successText}</p>
            <motion.button
              onClick={closeModal}
              className="py-2 px-6 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-all"
              whileHover={{ scale: 1.1 }}
            >
              {t.close}
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
