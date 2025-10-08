"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/language-provider"; // Asegúrate de que la ruta sea correcta

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  // Traducciones
  const translations = {
    es: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
      downloadCV: "Descargar CV 📄",
    },
    en: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      downloadCV: "Download CV 📄",
    },
  };

  const t = translations[language];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 md:px-8 shadow-md bg-white dark:bg-gray-900 dark:text-white transition-all">
      {/* Logo */}
      <div className="text-2xl font-bold text-teal-600 flex items-center md:flex-row">
        <span className="text-4xl">María</span>
        <span className="text-gray-700 dark:text-gray-300 text-4xl">.</span>
      </div>

      {/* Menú de escritorio */}
      <div className="hidden md:flex flex-1 justify-center space-x-8 text-gray-800 dark:text-gray-300 font-medium">
        {[
          { id: "home", label: t.home },
          { id: "about", label: t.about },
          { id: "projects", label: t.projects },
          { id: "contact", label: t.contact },
        ].map(({ id, label }) => (
          <motion.div
            key={id}
            whileHover={{ scale: 1.1, color: "#1abc9c" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <button
              onClick={() => scrollToSection(id)}
              className="transition"
            >
              {label}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Botones de escritorio */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Descargar CV */}
        <motion.a
          href="/cv.pdf"
          download
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg text-sm flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {t.downloadCV}
        </motion.a>

        {/* Selector de idioma */}
        <motion.div
          className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-lg p-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => setLanguage("es")}
            className={`px-2 py-1 rounded-md text-sm ${
              language === "es"
                ? "bg-teal-500 text-white"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            🇪🇸
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={`px-2 py-1 rounded-md text-sm ${
              language === "en"
                ? "bg-teal-500 text-white"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            🇺🇸
          </button>
        </motion.div>

        {/* Botón de modo oscuro */}
        {mounted && (
          <motion.button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        )}
      </div>

      {/* Menú móvil */}
      <div className="md:hidden flex items-center space-x-4 ml-auto">
        {/* Descargar CV */}
        <motion.a
          href="/cv.pdf"
          download
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg text-sm flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {t.downloadCV}
        </motion.a>

        {/* Selector de idioma móvil */}
        <div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
          <button
            onClick={() => setLanguage("es")}
            className={`px-2 py-1 rounded-md text-sm ${
              language === "es"
                ? "bg-teal-500 text-white"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            🇪🇸
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={`px-2 py-1 rounded-md text-sm ${
              language === "en"
                ? "bg-teal-500 text-white"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            🇺🇸
          </button>
        </div>

        {/* Botón modo oscuro */}
        {mounted && (
          <motion.button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        )}

        {/* Botón menú móvil */}
        <motion.button
          className="ml-2"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Menú desplegable móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="flex flex-col space-y-4 p-4 text-center text-gray-800 dark:text-gray-300 font-medium">
              {[
                { id: "home", label: t.home },
                { id: "about", label: t.about },
                { id: "projects", label: t.projects },
                { id: "contact", label: t.contact },
              ].map(({ id, label }) => (
                <motion.div
                  key={id}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={() => {
                      scrollToSection(id);
                      setIsOpen(false);
                    }}
                    className="hover:text-teal-600"
                  >
                    {label}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
