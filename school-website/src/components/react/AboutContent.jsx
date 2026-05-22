import React from 'react';
import { motion } from 'framer-motion';
import PlaceholderImage from './PlaceholderImage.jsx';

const features = [
  {
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    title: 'Academic Excellence',
    description: 'English Medium SSC curriculum focused on conceptual understanding, critical thinking, and practical application.',
  },
  {
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    title: 'Holistic Development',
    description: 'Focus on physical, emotional, and social growth through sports, arts, and character-building activities.',
  },
  {
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    title: 'Expert Faculty',
    description: '45+ dedicated and experienced teachers committed to student success with personalized attention.',
  },
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Safe Environment',
    description: 'Secure 2-acre campus with modern infrastructure, CCTV surveillance, and child-friendly facilities.',
  },
];

const achievements = [
  { number: '99%', label: 'Successful Results' },
  { number: '1200+', label: 'Active Students' },
  { number: '300+', label: 'New Admissions' },
];

const cardVariants = {
  hidden: { opacity: 0, x: -20, scale: 0.98 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function AboutContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="relative px-0">
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="space-y-3 sm:space-y-4">
            <motion.div
              className="aspect-square rounded-2xl overflow-hidden"
              variants={imageVariants} initial="hidden" whileInView="visible" custom={0} viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <PlaceholderImage type="students" aspect="1/1" className="w-full h-full" />
            </motion.div>
            <motion.div
              className="aspect-square rounded-2xl overflow-hidden"
              variants={imageVariants} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <PlaceholderImage type="lab" aspect="1/1" className="w-full h-full" />
            </motion.div>
          </div>
          <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-8">
            <motion.div
              className="aspect-square rounded-2xl overflow-hidden"
              variants={imageVariants} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <PlaceholderImage type="sports" aspect="1/1" className="w-full h-full" />
            </motion.div>
            <motion.div
              className="aspect-square rounded-2xl overflow-hidden"
              variants={imageVariants} initial="hidden" whileInView="visible" custom={3} viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <PlaceholderImage type="assembly" aspect="1/1" className="w-full h-full" />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute -bottom-3 right-0 sm:-right-4 bg-brand-600 text-white rounded-2xl p-3 sm:p-6 shadow-lg"
          initial={{ opacity: 0, scale: 0.5, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-xl sm:text-4xl font-bold">15+</div>
          <div className="text-[10px] sm:text-sm font-medium">Years of Excellence</div>
        </motion.div>

        <motion.div
          className="absolute -top-3 left-0 sm:-left-4 bg-white rounded-2xl p-2 sm:p-4 shadow-md border border-gray-100"
          initial={{ opacity: 0, scale: 0.5, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex gap-2 sm:gap-4">
            {achievements.map((ach) => (
              <div className="text-center min-w-0" key={ach.label}>
                <div className="text-sm sm:text-xl font-bold text-brand-600">{ach.number}</div>
                <div className="text-[10px] text-gray-500">{ach.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="space-y-4">
        <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group flex gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all duration-300 snap-start shrink-0 w-[270px] sm:w-[300px]"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -2, scale: 1.01 }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-brand-600 transition-colors text-sm">{feature.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
          <div className="snap-start shrink-0 w-4" />
        </div>

        <div className="hidden md:block space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-brand-200 hover:shadow-md hover:shadow-brand-100/50 transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -2, scale: 1.01 }}
            >
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-brand-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="#contact"
          className="group inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <span>Schedule a campus visit</span>
          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>
      </div>
    </div>
  );
}
