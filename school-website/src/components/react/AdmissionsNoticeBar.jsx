import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const marqueeContent = [
  { text: '✦ ADMISSIONS OPEN', highlight: true },
  { text: '2026–27 Academic Year' },
  { text: 'Limited Seats Available', accent: true },
  { text: 'Enroll Now →', cta: true },
];

export default function AdmissionsNoticeBar() {
  return (
    <div className="fixed top-16 lg:top-20 z-40 w-full overflow-hidden">
      <div className="relative bg-gradient-to-r from-brand-600 via-brand-700 to-teal-600">
        <div className="flex items-center h-10 sm:h-11 px-3 sm:px-4">

          <div className="flex items-center gap-1.5 mr-2 sm:mr-3 flex-shrink-0">
            <motion.span
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full shadow-sm shadow-green-400/50"
              animate={{ scale: [1, 1.6, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="text-[10px] sm:text-xs text-white/60 font-bold uppercase tracking-[0.15em] hidden sm:inline">Live</span>
          </div>

          <div className="w-px h-3.5 sm:h-4 bg-white/15 mr-2 sm:mr-3 hidden sm:block" />

          <div className="flex-1 overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            >
              {[1, 2].map((set) => (
                <div key={set} className="flex items-center gap-3 sm:gap-5 flex-shrink-0 px-2">
                  {marqueeContent.map((item, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && (
                        <span className="text-white/30 text-[10px] sm:text-xs">✦</span>
                      )}
                      <span
                        className={`text-[11px] sm:text-sm whitespace-nowrap ${
                          item.highlight
                            ? 'text-white font-extrabold tracking-wider'
                            : item.accent
                            ? 'text-yellow-200 font-bold'
                            : item.cta
                            ? 'text-white font-semibold underline underline-offset-4 decoration-white/30 hover:decoration-white/60 transition-all'
                            : 'text-white/80 font-medium'
                        }`}
                      >
                        {item.text}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
            }}
            animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-brand-600/0 via-brand-700/20 to-teal-600/0 pointer-events-none" />
        </div>

        <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        <motion.div
          className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-white/40 blur-[1px]"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
}
