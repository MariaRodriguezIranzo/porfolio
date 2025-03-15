"use client";
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
