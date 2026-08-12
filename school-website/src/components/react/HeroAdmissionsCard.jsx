import React from 'react';
import { motion } from 'framer-motion';

export default function HeroAdmissionsCard() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 44, scale: 0.94, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      transition={{ delay: 1.1, duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="relative bg-brand-600 rounded-2xl p-4 sm:p-5 border border-white/25 shadow-lg overflow-hidden"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.012, y: -6 }}
      >
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-white/10 rounded-full blur-2xl" />

        <motion.div
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 rounded-full mb-3 border border-white/15"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.55, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="w-1.5 h-1.5 bg-green-400 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em]">Admissions Open</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.75, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-white text-base sm:text-lg font-bold leading-tight mb-1">
            2026–27
            <br />
            <span className="text-yellow-200">Academic Year</span>
          </h3>
          <p className="text-white/80 text-xs mt-2 leading-relaxed">
            Limited seats available for Jr. KG to Class X.
            <br />
            Enroll today to secure your child's future.
          </p>
        </motion.div>

        <motion.div
          className="mt-4 pt-4 border-t border-white/15"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.05, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.a
            href="#contact"
            className="group relative inline-flex items-center justify-center w-full gap-2 px-5 py-2.5 bg-white text-brand-700 font-bold text-sm rounded-xl overflow-hidden transition-all hover:bg-brand-50"
            whileHover={{ scale: 1.025, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Enroll Now
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)',
          }}
        />
      </motion.div>
    </motion.div>
  );
}

