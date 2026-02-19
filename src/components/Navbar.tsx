"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  const { scrollY, scrollYProgress } = useScroll();

  const springConfig = { mass: 0.1, stiffness: 150, damping: 20 };

  const rawScale = useTransform(scrollY, [0, 50], [1, 0.96]);
  const rawPadding = useTransform(scrollY, [0, 50], ["14px 40px", "10px 28px"]);
  const navScale = useSpring(rawScale, springConfig);
  const navPadding = useSpring(rawPadding, springConfig);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // Section Observer
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      navItems.forEach((item) => {
        const section = document.getElementById(item.href);

        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          const absoluteTop = top + window.scrollY;
          const absoluteBottom = bottom + window.scrollY;

          if (
            scrollPosition >= absoluteTop &&
            scrollPosition <= absoluteBottom
          ) {
            setActiveSection(item.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const offset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-[100] flex justify-center pointer-events-none">
      <motion.nav
        style={{ scale: navScale, padding: navPadding }}
        className={cn(
          "pointer-events-auto relative flex items-center gap-2 rounded-full border shadow-2xl transition-all duration-500",
          "bg-blue-950/30 border-white/10 backdrop-blur-xl shadow-blue-900/20"
        )}
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection("about")}
          className="flex items-center justify-center px-2 transition-transform active:scale-95"
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-white/10">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>
        </button>

        {/* Navigation */}
        <div className="flex items-center gap-3">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={cn(
                "relative px-8 py-2 text-[10px] font-bold uppercase tracking-[0.15em] transition-colors",
                activeSection === item.href
                  ? "text-blue-400"
                  : "text-slate-400 hover:text-white"
              )}
            >
              {activeSection === item.href && (
                <motion.div
                  layoutId="active-pill-bg"
                  className="absolute inset-0 z-0 rounded-full bg-blue-400/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-8 right-8 h-[1.5px] bg-blue-400 origin-left rounded-full"
          style={{ scaleX }}
        />
      </motion.nav>
    </div>
  );
}
