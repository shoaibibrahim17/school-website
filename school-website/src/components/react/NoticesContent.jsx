import React from 'react';
import { motion } from 'framer-motion';

const notices = [
  {
    title: 'Admissions Open for Academic Year 2026-27',
    date: 'May 15, 2026',
    category: 'Admissions',
    urgent: true,
    description: 'Apply now for Classes LKG to 10th. Limited seats available.',
  },
  {
    title: 'Summer Vacation Schedule',
    date: 'May 20, 2026',
    category: 'Holidays',
    urgent: false,
    description: 'School closes on May 25th. Classes resume on June 15th.',
  },
  {
    title: 'Parent-Teacher Meeting',
    date: 'May 25, 2026',
    category: 'Events',
    urgent: false,
    description: 'Quarterly PTM for all classes. Attendance mandatory.',
  },
  {
    title: 'Annual Examination Schedule',
    date: 'May 10, 2026',
    category: 'Academic',
    urgent: false,
    description: 'Final exams from June 1st to 15th. Syllabus available.',
  },
  {
    title: 'SSC Board Results 2025',
    date: 'May 05, 2026',
    category: 'Achievement',
    urgent: false,
    description: 'Class 10th: 98% pass rate | Class 12th: 95% pass rate',
  },
  {
    title: 'School Transport Registration',
    date: 'May 12, 2026',
    category: 'Transport',
    urgent: false,
    description: 'New bus routes added. Register before May 30th.',
  },
];

const categoryColors = {
  Admissions: 'bg-brand-600',
  Holidays: 'bg-teal-600',
  Events: 'bg-brand-500',
  Academic: 'bg-brand-700',
  Achievement: 'bg-teal-500',
  Transport: 'bg-brand-400',
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function NoticesContent() {
  return (
    <>
      <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4">
        {notices.map((notice, index) => (
          <motion.article
            key={notice.title}
            className="group relative p-5 bg-white rounded-xl border border-gray-100 hover:border-brand-200 transition-colors duration-500 snap-start shrink-0 w-[280px] sm:w-[320px]"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -2, boxShadow: '0 16px 32px rgba(79, 70, 229, 0.08)' }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold text-white ${categoryColors[notice.category] || 'bg-gray-500'}`}>
                {notice.category}
              </span>
              {notice.urgent && (
                <motion.span
                  className="flex items-center gap-1 px-2 py-1 bg-red-50 text-red-600 rounded-lg text-[11px] font-semibold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Urgent
                </motion.span>
              )}
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-gray-400 mb-2">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {notice.date}
            </div>
            <h3 className="text-sm font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2 leading-snug line-clamp-2">
              {notice.title}
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
              {notice.description}
            </p>
          </motion.article>
        ))}
        <div className="snap-start shrink-0 w-4" />
      </div>

      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notices.map((notice, index) => (
          <motion.article
            key={notice.title}
            className="group relative p-6 bg-white rounded-xl border border-gray-100 hover:border-brand-200 transition-colors duration-500"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -3, boxShadow: '0 20px 40px rgba(79, 70, 229, 0.1)' }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-lg text-xs font-bold text-white ${categoryColors[notice.category] || 'bg-gray-500'}`}>
                {notice.category}
              </span>
              {notice.urgent && (
                <motion.span
                  className="flex items-center gap-1 px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Urgent
                </motion.span>
              )}
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {notice.date}
            </div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-3 line-clamp-2">
              {notice.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
              {notice.description}
            </p>
            <motion.div
              className="mt-4 flex items-center text-brand-600 font-medium text-sm"
              initial={{ opacity: 0, x: -5 }}
              whileHover={{ opacity: 1, x: 0 }}
            >
              <span>Read more</span>
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="mt-12 bg-gradient-to-r from-brand-600 via-teal-600 to-brand-600 bg-[length:200%_100%] rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <img src={import.meta.env.BASE_URL + '/logo.svg'} alt="" className="w-[200px] sm:w-[300px] lg:w-[400px] opacity-[0.08] brightness-0 invert object-contain" aria-hidden="true" />
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 relative z-10">Never Miss an Update</h3>
        <p className="text-brand-100 mb-6 max-w-2xl mx-auto relative z-10">Subscribe to our newsletter to receive important notices and updates directly in your inbox.</p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative z-10">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 rounded-xl bg-white/15 border border-white/25 text-white placeholder-brand-200 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <motion.button
            type="submit"
            className="px-8 py-3 bg-white text-brand-600 font-semibold rounded-xl"
            whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
            whileTap={{ scale: 0.98 }}
          >
            Subscribe
          </motion.button>
        </form>
      </motion.div>
    </>
  );
}
