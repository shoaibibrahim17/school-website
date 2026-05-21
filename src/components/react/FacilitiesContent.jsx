import React from 'react';
import { motion } from 'framer-motion';

const facilities = [
  {
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    title: 'Smart Classrooms',
    description: 'Interactive smart boards, WiFi-enabled AC classrooms with ergonomic furniture.',
    color: 'from-brand-500 to-brand-600',
    size: 'large',
  },
  {
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Computer Lab',
    description: '50+ workstations with high-speed internet and latest software.',
    color: 'from-teal-500 to-teal-600',
    size: 'small',
  },
  {
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    title: 'Library',
    description: '10,000+ books, digital resources, and quiet study zones.',
    color: 'from-brand-400 to-brand-500',
    size: 'small',
  },
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Science Labs',
    description: 'Fully-equipped physics, chemistry, and biology labs.',
    color: 'from-teal-500 to-teal-600',
    size: 'medium',
  },
  {
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    title: 'Sports Complex',
    description: 'Indoor court, playground, cricket ground, and yoga studio.',
    color: 'from-brand-500 to-brand-600',
    size: 'medium',
  },
  {
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    title: 'Medical & Safety',
    description: 'Full-time nurse, infirmary, CCTV, and secure campus.',
    color: 'from-brand-400 to-brand-500',
    size: 'small',
  },
  {
    icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
    title: 'Transport',
    description: 'GPS-enabled buses covering 20+ routes with experienced drivers.',
    color: 'from-teal-500 to-teal-600',
    size: 'small',
  },
  {
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    title: 'Auditorium',
    description: '500-seater auditorium with advanced AV setup.',
    color: 'from-brand-500 to-brand-600',
    size: 'large',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function FacilitiesContent() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
      {facilities.map((facility, index) => {
        const spanClass =
          facility.size === 'large'
            ? 'md:col-span-2 md:row-span-2'
            : facility.size === 'medium'
            ? 'md:col-span-2 md:row-span-1'
            : 'md:col-span-1 md:row-span-1';
        const iconSize = facility.size === 'large' ? 'w-7 h-7' : 'w-5 h-5';
        const boxSize = facility.size === 'large' ? 'w-14 h-14' : facility.size === 'medium' ? 'w-12 h-12' : 'w-11 h-11';

        return (
          <motion.div
            key={facility.title}
            className={`group relative p-6 lg:p-8 bg-white rounded-2xl border border-gray-100 transition-all duration-500 ${spanClass}`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -4, scale: 1.01, boxShadow: '0 20px 40px rgba(79, 70, 229, 0.12)' }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />

            <div className="relative h-full flex flex-col">
              <motion.div
                className={`bg-gradient-to-br ${facility.color} rounded-xl flex items-center justify-center mb-4 shadow-md ${boxSize}`}
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ duration: 0.3 }}
              >
                <svg className={`text-white ${iconSize}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={facility.icon} />
                </svg>
              </motion.div>

              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                {facility.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{facility.description}</p>

              <motion.div
                className="mt-4 flex items-center gap-1 text-brand-600 font-medium text-sm"
                initial={{ opacity: 0, x: -5 }}
                whileHover={{ opacity: 1, x: 0 }}
              >
                <span>Explore</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
