'use client';

import { motion } from 'framer-motion';
import Button from './Button';

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:hassanekkeri2@gmail.com',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ekkerihasan',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hassan-ekkeri-0a3a042b9/',
  },
];

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact"
      className="py-40 md:py-48 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className=" w-full text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Let's Connect
          </h2>

          <p className="text-lg md:text-xl text-slate-600 mb-0 leading-relaxed mx-auto max-w-6xl">
            Open to collaboration, internships, and backend-focused opportunities.
            Let's build something secure, scalable, and meaningful together.
          </p>
        </motion.div>

        {/* Social Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactLinks.map((link) => (
            <motion.div
              key={link.href}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Button
                href={link.href}
                variant="outline"
                className="border-blue-600 text-blue-600 bg-transparent hover:bg-transparent hover:border-blue-700 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
