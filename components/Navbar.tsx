"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun } from "lucide-react";
import Link from "next/link";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Se ejecuta después del primer renderizado en el cliente
  useEffect(() => {
    setMounted(true);
  }, []);

 
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 md:px-8 shadow-md bg-white dark:bg-gray-900 dark:text-white transition-all">
      {/* Logo */}
      <div className="text-2xl font-bold text-teal-600 flex items-center md:flex-row">
        <span className="text-4xl">María</span>
        <span className="text-gray-700 dark:text-gray-300 text-4xl">.</span>
      </div>

      {/* Menú de escritorio */}
      <div className="hidden md:flex flex-1 justify-center space-x-8 text-gray-800 dark:text-gray-300 font-medium">
        <Link href="#home" className="hover:text-teal-600 transition">Home</Link>
        <Link href="#about" className="hover:text-teal-600 transition">About</Link>
        <Link href="#projects" className="hover:text-teal-600 transition">Projects</Link>
        <Link href="#contact" className="hover:text-teal-600 transition">Contact</Link>
      </div>

      {/* Botones en escritorio */}
      <div className="hidden md:flex space-x-4">
        {/* Botón de Descargar CV */}
        <a href="/cv.pdf" download className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg text-sm flex items-center">
        Download CV 📄
        </a>

        {/* Botón de modo oscuro (se muestra solo si está montado) */}
        {mounted && (
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg"
          >
            {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}
      </div>

      {/* Menú móvil */}
      <div className="md:hidden flex items-center space-x-4 ml-auto">
        {/* Botón de Descargar CV */}
        <a
          href="/cv.pdf"
          download
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg text-sm flex items-center"
        >
          Download CV 📄
        </a>

        {/* Botón de modo oscuro (se muestra solo si está montado) */}
        {mounted && (
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg"
          >
            {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}

        {/* Botón de menú móvil */}
        <button className="ml-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden">
          <div className="flex flex-col space-y-4 p-4 text-center text-gray-800 dark:text-gray-300 font-medium">
          <Link href="#home" className="hover:text-teal-600">Home</Link>
            <Link href="#about" className="hover:text-teal-600">About</Link>
            <Link href="#projects" className="hover:text-teal-600">Projects</Link>
            <Link href="#contact" className="hover:text-teal-600">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
