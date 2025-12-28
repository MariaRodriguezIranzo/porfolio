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

  useEffect(() => setMounted(true), []);

  // 🔒 Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    setIsOpen(false);
    window.scrollTo({
      top: element.offsetTop - 64,
      behavior: "smooth",
    });
  };

  const translations = {
    es: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
      downloadCV: "CV",
    },
    en: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      downloadCV: "CV",
    },
  };

  const t = translations[language];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-teal-500">
        María<span className="text-gray-700 dark:text-gray-300">.</span>
      </div>

      {/* Desktop menu */}
      <div className="hidden lg:flex flex-1 justify-center gap-8 text-gray-800 dark:text-gray-300">
        {["home", "about", "projects", "contact"].map((id) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="hover:text-teal-500 transition"
          >
            {t[id as keyof typeof t]}
          </button>
        ))}
      </div>

      {/* Desktop buttons */}
      <div className="hidden lg:flex items-center gap-3">
        <a
          href="/cv.pdf"
          download
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-300"
        >
          {t.downloadCV}
        </a>

        <div className="flex bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
          {["es", "en"].map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang as "es" | "en")}
              className={`px-2 py-1 rounded-md ${
                language === lang
                  ? "bg-teal-500 text-white"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {lang === "es" ? "🇪🇸" : "🇺🇸"}
            </button>
          ))}
        </div>

        {mounted && (
          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-white"
          >
            {resolvedTheme === "dark" ? <Sun /> : <Moon />}
          </button>
        )}
      </div>

      {/* Mobile buttons */}
      <div className="lg:hidden flex items-center gap-3">
        {mounted && (
          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-white"
          >
            {resolvedTheme === "dark" ? <Sun /> : <Moon />}
          </button>
        )}

        <div className="flex bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
          {["es", "en"].map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang as "es" | "en")}
              className={`px-2 py-1 rounded-md ${
                language === lang
                  ? "bg-teal-500 text-white"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {lang === "es" ? "🇪🇸" : "🇺🇸"}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-white"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* ✅ MENÚ MÓVIL CORREGIDO (centrado real en TODOS los móviles) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="
              fixed inset-0 z-40
              bg-white dark:bg-gray-900
              flex flex-col items-center justify-center
              gap-8
              pt-20
              text-gray-800 dark:text-gray-300
              lg:hidden
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {["home", "about", "projects", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-lg hover:text-teal-500 transition"
              >
                {t[id as keyof typeof t]}
              </button>
            ))}

            <a
              href="/cv.pdf"
              download
              className="px-6 py-3 bg-teal-500 text-white rounded-lg"
            >
              {t.downloadCV}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}