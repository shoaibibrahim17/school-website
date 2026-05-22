import React from 'react';
import { motion } from 'framer-motion';

export default function HeroAdmissionsCard() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div
        className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-brand-400 via-brand-600 to-teal-500 opacity-40 blur-sm"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-white/20 shadow-2xl overflow-hidden"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.02, y: -8 }}
      >
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-500/20 rounded-full blur-2xl" />
        <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-teal-500/15 rounded-full blur-2xl" />

        <motion.div
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 rounded-full mb-3 border border-white/10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <motion.span
            className="w-1.5 h-1.5 bg-green-400 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="text-white/80 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em]">Admissions Open</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          <h3 className="text-white text-lg sm:text-xl font-bold leading-tight mb-1">
            2026–27
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400">Academic Year</span>
          </h3>
          <p className="text-white/70 text-xs sm:text-sm mt-2 leading-relaxed">
            Limited seats available for Jr. KG to Class X.
            <br />
            Enroll today to secure your child's future.
          </p>
        </motion.div>

        <motion.div
          className="mt-4 pt-4 border-t border-white/10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.5 }}
        >
          <motion.a
            href="#contact"
            className="group relative inline-flex items-center justify-center w-full gap-2 px-5 py-2.5 bg-white/20 hover:bg-white/25 text-white font-bold text-sm rounded-xl overflow-hidden transition-all"
            whileHover={{ scale: 1.03, y: -1 }}
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

        <motion.div
          className="absolute -inset-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg]"
          animate={{ x: ['-200%', '300%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay: 2 }}
        />
      </motion.div>
    </motion.div>
  );
}
