'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Typewriter from './Typewriter';
import Button from './Button';

export default function Hero() {
  const scrollDown = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      className="relative min-h-[85vh]
 flex items-center justify-center px-6 pt-20 sm:px-8 overflow-hidden"
    >
      <div className="max-w-5xl w-full mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight"
            >
              <Typewriter text="Hasan Ekkeri" speed={50} />
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="outline-block px-4 py-1  border-white/10 text-blue-400 font-medium text-lg mb-6"
            >
              Backend Developer
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              I build secure, scalable backend systems and full-stack solutions
              with a focus on database design, system architecture, and
              information security.
            </motion.p>

            <motion.div
              className="flex gap-5 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Button
                href="#projects"
                variant="outline"
                className=" hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button
                href="#contact"
                variant="outline"
                className="hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: The 3D Pop-out Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-center group"
          >
            {/* The "Glow Base" Circle */}
            <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full bg-gradient-to-b from-blue-600/20 to-transparent blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
            
            {/* The visible floor/ring for 3D effect */}
            <div className="absolute bottom-10 w-[250px] h-[60px] md:w-[350px] md:h-[80px] bg-blue-500/10 border border-blue-500/20 rounded-[100%] blur-sm shadow-[0_0_40px_rgba(59,130,246,0.2)]" />

           <motion.div
  className="relative z-10 w-[280px] h-[380px] md:w-[320px] md:h-[420px] mx-auto group"
  whileHover={{ scale: 1.02 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
  {/* The Aesthetic Frame */}
  <div className="absolute inset-0 rounded-[2rem] border-2 border-white/20 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm overflow-hidden shadow-2xl">
    
    {/* Inner Glow/Highlight */}
    <div className="absolute inset-0 border border-blue-400/30 rounded-[2rem] pointer-events-none" />

    <Image
      src="/pfp1.png" 
      alt="Hasan Ekkeri"
      fill
      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      priority
    />
    
    {/* Bottom Gradient Overlay to make the image blend with the frame */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
  </div>

  {/* Decorative Corner Accents */}
  <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-blue-500 rounded-tr-xl" />
  <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-blue-500 rounded-bl-xl" />
</motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollDown}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-slate-500 group-hover:text-blue-400 transition-colors">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}