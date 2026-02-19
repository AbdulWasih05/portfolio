'use client';

import { motion } from 'framer-motion';
import { 
  SiNodedotjs, SiExpress, SiJavascript, SiPython, 
  SiMysql, SiPostgresql, SiJsonwebtokens,
  SiAuth0, SiDocker, SiSqlite
} from 'react-icons/si';

const skillsData = [
  { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: 'Express.js', icon: <SiExpress className="text-white" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: 'Python', icon: <SiPython className="text-[#3776AB]" /> },
  { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
  { name: 'JWT', icon: <SiJsonwebtokens className="text-[#d63aff]" /> },
  { name: 'SQL', icon: <SiSqlite className="text-[#003B57]" /> },
  { name: 'Auth & Security', icon: <SiAuth0 className="text-[#EB5424]" /> },
  { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#020617] overflow-hidden">
      
      {/* 1. HEADER: Clean and minimal */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Technical Stack
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
        </motion.div>
      </div>

      {/* 2. SPACING: Explicit gap between header and icons */}
      <div className="h-20 md:h-32" /> 

      {/* 3. MARQUEE: The Floating Icon Row */}
      <div className="relative flex items-center">
        {/* Side Blurs */}
        <div className="absolute left-0 z-20 w-24 md:w-48 h-full bg-gradient-to-r from-[#020617] to-transparent pointer-events-none" />
        <div className="absolute right-0 z-20 w-24 md:w-48 h-full bg-gradient-to-l from-[#020617] to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-10 items-center whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {[...skillsData, ...skillsData].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-6 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </span>
              <span className="text-xl font-bold text-slate-300 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}