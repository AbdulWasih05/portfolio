'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-10 py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center text-slate-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-2 font-medium">Built with Next.js, Tailwind CSS, and Framer Motion</p>
          <p className="text-sm">© {year} Hasan Ekkeri. All rights reserved.</p>
        </motion.div>

        {/* Social links removed per request */}
      </div>
    </footer>
  );
}
