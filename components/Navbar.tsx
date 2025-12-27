"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔒 Bloquear scroll cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  const translations = {
    es: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
      downloadCV: "CV 📄",
    },
    en: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      downloadCV: "CV 📄",
    },
  };

  const t = translations[language];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 md:px-8 py-3 shadow-md transition-all
      ${isOpen ? "bg-white dark:bg-gray-900" : "bg-white dark:bg-gray-900"}`}
    >
      {/* Logo */}
      <div className="text-2xl sm:text-3xl font-bold text-teal-600 flex items-center">
        <span>María</span>
        <span className="text-gray-700 dark:text-gray-300">.</span>
      </div>

      {/* Menú escritorio */}
      <div className="hidden lg:flex flex-1 justify-center space-x-6 xl:space-x-10 text-gray-800 dark:text-gray-300 font-medium">
        {[
          { id: "home", label: t.home },
          { id: "about", label: t.about },
          { id: "projects", label: t.projects },
          { id: "contact", label: t.contact },
        ].map(({ id, label }) => (
          <motion.button
            key={id}
            onClick={() => scrollToSection(id)}
            whileHover={{ scale: 1.1, color: "#14b8a6" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="text-base xl:text-lg transition"
          >
            {label}
          </motion.button>
        ))}
      </div>

      {/* Botones escritorio */}
      <div className="hidden lg:flex items-center space-x-3 xl:space-x-5">
        <motion.a
          href="/cv.pdf"
          download
          className="px-3 py-2 xl:px-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg text-sm xl:text-base"
          whileHover={{ scale: 1.05 }}
        >
          {t.downloadCV}
        </motion.a>

        <motion.div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
          {["es", "en"].map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang as "es" | "en")}
              className={`px-2 py-1 rounded-md text-sm ${
                language === lang
                  ? "bg-teal-500 text-white"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {lang === "es" ? "🇪🇸" : "🇺🇸"}
            </button>
          ))}
        </motion.div>

        {mounted && (
          <motion.button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg"
          >
            {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        )}
      </div>

      {/* Menú móvil */}
      <div className="flex lg:hidden items-center space-x-3 ml-auto">
        {mounted && (
          <motion.button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
          >
            {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        )}

        <div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
          {["es", "en"].map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang as "es" | "en")}
              className={`px-2 py-1 rounded-md text-sm ${
                language === lang
                  ? "bg-teal-500 text-white"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {lang === "es" ? "🇪🇸" : "🇺🇸"}
            </button>
          ))}
        </div>

        {/* 🔥 BOTÓN HAMBURGUESA CORREGIDO */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </motion.button>
      </div>

      {/* Menú desplegable */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 flex flex-col items-center justify-center space-y-8 text-lg text-gray-800 dark:text-gray-300 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[
              { id: "home", label: t.home },
              { id: "about", label: t.about },
              { id: "projects", label: t.projects },
              { id: "contact", label: t.contact },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => {
                  scrollToSection(id);
                  setIsOpen(false);
                }}
                className="hover:text-teal-500 transition"
              >
                {label}
              </button>
            ))}

            <a
              href="/cv.pdf"
              download
              className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg"
            >
              {t.downloadCV}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
