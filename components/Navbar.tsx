"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Función de desplazamiento suave
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50, // Ajusta la posición para que no se superponga al navbar
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 md:px-8 shadow-md bg-white dark:bg-gray-900 dark:text-white transition-all">
      {/* Logo */}
      <div className="text-2xl font-bold text-teal-600 flex items-center md:flex-row">
        <span className="text-4xl">María</span>
        <span className="text-gray-700 dark:text-gray-300 text-4xl">.</span>
      </div>

      {/* Menú de escritorio con animación */}
      <div className="hidden md:flex flex-1 justify-center space-x-8 text-gray-800 dark:text-gray-300 font-medium">
        <motion.div
          whileHover={{ scale: 1.1, color: "#1abc9c" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <button
            onClick={() => scrollToSection("home")}
            className="transition"
          >
            Home
          </button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, color: "#1abc9c" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="transition"
          >
            About
          </button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, color: "#1abc9c" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="transition"
          >
            Projects
          </button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, color: "#1abc9c" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="transition"
          >
            Contact
          </button>
        </motion.div>
      </div>

      {/* Botones en escritorio */}
      <div className="hidden md:flex space-x-4">
        {/* Botón de Descargar CV */}
        <motion.a
          href="/cv.pdf"
          download
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg text-sm flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Download CV 📄
        </motion.a>

        {/* Botón de modo oscuro (se muestra solo si está montado) */}
        {mounted && (
          <motion.button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
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
        {/* Botón de Descargar CV */}
        <motion.a
          href="/cv.pdf"
          download
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg text-sm flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Download CV 📄
        </motion.a>

        {/* Botón de modo oscuro (se muestra solo si está montado) */}
        {mounted && (
          <motion.button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        )}

        {/* Botón de menú móvil */}
        <motion.button
          className="ml-4"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Menú desplegable móvil con animación */}
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
              <motion.div
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => {
                    scrollToSection("home");
                    setIsOpen(false); // Cerrar el menú al hacer clic
                  }}
                  className="hover:text-teal-600"
                >
                  Home
                </button>
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => {
                    scrollToSection("about");
                    setIsOpen(false); // Cerrar el menú al hacer clic
                  }}
                  className="hover:text-teal-600"
                >
                  About
                </button>
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => {
                    scrollToSection("projects");
                    setIsOpen(false); // Cerrar el menú al hacer clic
                  }}
                  className="hover:text-teal-600"
                >
                  Projects
                </button>
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => {
                    scrollToSection("contact");
                    setIsOpen(false); // Cerrar el menú al hacer clic
                  }}
                  className="hover:text-teal-600"
                >
                  Contact
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}