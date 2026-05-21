import React from 'react';
import { motion } from 'framer-motion';

const icons = {
  classroom: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  students: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z',
  lab: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  sports: 'M13 10V3L4 14h7v7l9-11h-7z',
  assembly: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  science: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  music: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z',
  event: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
};

export default function PlaceholderImage({ type = 'classroom', aspect = '4/3', className = '' }) {
  const iconPath = icons[type] || icons.classroom;
  const gradientMap = {
    classroom: 'from-brand-100 via-brand-50 to-teal-50',
    students: 'from-brand-50 via-teal-50 to-brand-100',
    lab: 'from-teal-50 via-brand-50 to-brand-100',
    sports: 'from-brand-50 via-brand-100 to-teal-50',
    assembly: 'from-teal-100 via-brand-50 to-brand-50',
    science: 'from-brand-100 via-teal-50 to-brand-50',
    music: 'from-brand-50 via-teal-100 to-brand-100',
    event: 'from-teal-50 via-brand-100 to-brand-50',
  };
  const gradient = gradientMap[type] || gradientMap.classroom;

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
      style={{ aspectRatio: aspect === '4/3' ? '4/3' : aspect === '16/9' ? '16/9' : '1/1' }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/[0.03] to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-sm"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={iconPath} />
            </svg>
          </motion.div>
          <span className="text-xs sm:text-sm font-medium text-brand-300/80">Image coming soon</span>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4)_0%,transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/10 to-transparent" />
    </div>
  );
}
