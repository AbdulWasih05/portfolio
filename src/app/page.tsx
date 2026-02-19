'use client';

import Navbar from '@/components/Navbar';
import About from '@/components/HeroNew';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Project from '@/components/ProjectCard';

export default function Home() {
  return (
    <main className="w-full relative z-10">
      <Navbar />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
